import { FC } from "react";
import { Button, Stack, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";

import { ModalActions } from "@/app/components/ModalActions";

export const EditInfoModalFeature: FC = () => {
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    modals.closeAll();
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          required
          label="Заголовок"
          {...form.getInputProps("title")}
        />
        <Textarea
          required
          label="Описание"
          {...form.getInputProps("description")}
        />
      </Stack>

      <ModalActions>
        <Button type="submit">Подтвердить</Button>
      </ModalActions>
    </form>
  );
};
