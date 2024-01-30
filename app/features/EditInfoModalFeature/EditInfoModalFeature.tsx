import { FC } from "react";
import { Button, Stack, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";

import { ModalActions } from "@/app/components/ModalActions";
import { useCalendarStore } from "@/app/stores";
import { useUpdateCalendar } from "@/db/hooks";

export const EditInfoModalFeature: FC = () => {
  const title = useCalendarStore((state) => state.data.title);
  const description = useCalendarStore((state) => state.data.description);
  const id = useCalendarStore((state) => state.data.id);

  const { mutateAsync: updateCalendar, isPending: loading } =
    useUpdateCalendar();

  const form = useForm({
    initialValues: {
      title,
      description,
    },
  });

  const handleSubmit = form.onSubmit(async ({ title, description }) => {
    const data = await updateCalendar({
      where: { id },
      data: { title, description },
      select: { title: true, description: true },
    });
    if (data) {
      useCalendarStore.setState((state) => ({
        data: {
          ...state.data,
          title: data.title,
          description: data.description,
        },
      }));
    }
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
        <Button loading={loading} type="submit">
          Подтвердить
        </Button>
      </ModalActions>
    </form>
  );
};
