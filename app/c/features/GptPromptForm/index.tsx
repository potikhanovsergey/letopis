import { Button, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { FC } from "react";

export const GptPromptForm: FC = () => {
  const form = useForm({
    initialValues: {
      prompt: "",
    },
  });

  const handleSubmit = form.onSubmit((values) => {});

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          {...form.getInputProps("prompt")}
          maxLength={80}
          placeholder="История России"
          label="Введите тематику"
          description="А Yandex GPT предложит по ней события"
        />
        <Button type="submit">Отправить запрос</Button>
      </Stack>
    </form>
  );
};
