import { FC } from "react";
import { batch } from "@legendapp/state";
import { useSelector } from "@legendapp/state/react";
import { Button, Stack, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";

import { ModalActions } from "@/app/components/ModalActions";
import { calendarData$ } from "@/app/stores";
import { isImageUrlValid } from "@/app/utils/isImageUrlValid";
import { useUpdateCalendar } from "@/db/hooks";

export const EditInfoModalFeature: FC = () => {
  const id = useSelector(calendarData$.id);
  const title = useSelector(calendarData$.title);
  const description = useSelector(calendarData$.description);
  const previewUrl = useSelector(calendarData$.previewUrl);

  const { mutateAsync: updateCalendar, isPending: loading } =
    useUpdateCalendar();

  const form = useForm({
    initialValues: {
      title,
      description,
      previewUrl,
    },
    validate: {
      previewUrl: (url) =>
        isImageUrlValid(url)
          ? null
          : "Ссылка должна быть с протоколом https, формат изображения png, jpg/jpeg, webp",
    },
  });

  const handleSubmit = form.onSubmit(
    async ({ title, description, previewUrl }) => {
      const data = await updateCalendar({
        where: { id },
        data: { title, description, previewUrl },
        select: { title: true, description: true, previewUrl: true },
      });
      if (data) {
        batch(() => {
          calendarData$.title.set(title);
          calendarData$.previewUrl.set(previewUrl);
          calendarData$.description.set(description);
        });
      }
      modals.closeAll();
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          required
          label="Заголовок"
          {...form.getInputProps("title")}
        />
        <TextInput
          label="Ссылка на изображение"
          {...form.getInputProps("previewUrl")}
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
