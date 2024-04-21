import { GptEvent } from "@/app/(fsd)/app/types";
import { getSession } from "@/server/utils";

interface GptResponse {
  result: {
    alternatives: { role: string; message: { text: string }; status: string }[];
    usage: {
      inputTextTokens: string;
      completionTokens: string;
      totalTokens: string;
    };
    modelVersion: string;
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folderId = process.env.YC_FOLDER_ID!;

  const session = await getSession();
  if (!session)
    return new Response(`Unauthorized`, {
      status: 401,
    });

  const prompt = searchParams.get("prompt");

  const body = {
    modelUri: `gpt://${folderId}/yandexgpt`,
    completionOptions: {
      stream: false,
      temperature: 0.01,
      maxTokens: "1500",
    },
    messages: [
      {
        role: "system",
        text: "Пользователь введет тематику. В ответ отправь список исторических событий, которые относятся к этой тематике. Старайся найти от 5 до 10 событий по заданной тематике.",
      },
      {
        role: "system",
        text: `Все даты должны быть в формате день.месяц.год, напимер 27.07.2003`,
      },
      {
        role: "system",
        text: "Формат даты в ответе должен быть 'дд.мм.гггг'. Если точная дата неизвестна, а известен только год, тогда выводи первый день этого года",
      },
      {
        role: "system",
        text: "Ответ должен содерать только JSON массив. В ответе не должно быть вступительной речи и вывода. Никак не форматируй ответ, вставь только сам массив. Пример ответа: [{ title: 'Крещение Руси', date: '01.01.988' }]",
      },
      {
        role: "user",
        text: prompt,
      },
    ],
  };

  const res = await fetch(
    `https://llm.api.cloud.yandex.net/foundationModels/v1/completion`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-folder-id": folderId,
        Authorization: `Api-Key ${process.env.YC_GPT_SECRET}`,
      },
      method: "POST",
      body: JSON.stringify(body),
    }
  );

  const response = (await res.json()) as GptResponse;
  let data: GptEvent[] = [];

  let message = response?.result?.alternatives?.[0]?.message?.text;
  if (message) {
    message = message.replaceAll("```", "");
    try {
      const array = JSON.parse(message);
      const validArray: GptEvent[] = [];
      if (Array.isArray(array)) {
        array.forEach((value) => {
          /* Проверка на соответствие объекта структуре */
          if (value && typeof value === "object" && value.date && value.title) {
            validArray.push(value);
          }
        });
        data = validArray;
      }
    } catch (e) {
      console.error(e);
    }
  }

  return Response.json(data);
}
