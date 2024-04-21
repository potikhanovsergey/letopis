import { GptEvent, SuggestionEvent } from "@/app/(fsd)/app/types";
import { Stack, TextInput, Button, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { FC } from "react";
import dayjs from "dayjs";
import { openModal } from "@mantine/modals";
import GptSuggestions from "@/app/c/features/GptSuggestions";
import { GPT_SUGGESTIONS_MODAL_ID } from "@/app/(fsd)/app/constants";

export const GptPromptForm: FC = () => {
  const [loading, { open: startLoading, close: endLoading }] = useDisclosure();
  const form = useForm({
    initialValues: {
      prompt: "",
    },
  });

  const [hasNoFound, { open: showNoFound, close: hideNoFound }] =
    useDisclosure(false);

  const handleSubmit = form.onSubmit(async ({ prompt }) => {
    startLoading();
    hideNoFound();

    const response = await fetch(`/api/gpt?prompt=${prompt}`);
    const items = (await response.json()) as GptEvent[];
    const validItems = items.reduce((acc, item) => {
      const d = dayjs(item.date, "DD.MM.YYYY");
      if (d.isValid()) {
        acc.push({ ...item, date: d.toDate() });
      }

      return acc;
    }, [] as SuggestionEvent[]);
    if (validItems.length) {
      openModal({
        children: <GptSuggestions suggestions={validItems} />,
        modalId: GPT_SUGGESTIONS_MODAL_ID,
        size: "xl",
        title: "Варианты автозаполнения",
      });
    } else {
      showNoFound();
    }
    endLoading();
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        {hasNoFound && (
          <Text c="dimmed">
            Ничего не получилось вывести, попробуйте другой запрос
          </Text>
        )}
        <TextInput
          {...form.getInputProps("prompt")}
          maxLength={80}
          minLength={4}
          disabled={loading}
          placeholder="История России"
          label="Введите тематику"
          description="А Yandex GPT предложит по ней события"
        />
        <Button loading={loading} type="submit">
          Отправить запрос
        </Button>
      </Stack>
    </form>
  );
};
