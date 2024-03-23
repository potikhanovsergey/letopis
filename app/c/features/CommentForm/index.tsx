import { calendarData$ } from "@/app/stores/calendar";
import { useCreateComment } from "@/db/hooks";
import { useSelector } from "@legendapp/state/react";
import { Button, Group, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useSession } from "next-auth/react";
import { FC } from "react";

const CommentForm: FC = () => {
  const id = useSelector(calendarData$.id);
  const form = useForm({
    initialValues: {
      message: "",
    },
  });

  const { data: session } = useSession();
  const { mutateAsync: createComment, isPending } = useCreateComment();

  if (!session?.user.id) return null;

  const handleFormSubmit = form.onSubmit(async ({ message }) => {
    await createComment({
      data: { calendarId: id, message, userId: session?.user.id },
    });
    form.setFieldValue("message", "");
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <Textarea
        minRows={4}
        autosize
        maxRows={12}
        required
        withAsterisk={false}
        data-autofocus
        label="Оставить комментарий"
        {...form.getInputProps("message")}
        disabled={isPending}
      />
      <Group justify="flex-end">
        <Button disabled={isPending} type="submit" variant="filled" mt="sm">
          Отправить
        </Button>
      </Group>
    </form>
  );
};

export default CommentForm;
