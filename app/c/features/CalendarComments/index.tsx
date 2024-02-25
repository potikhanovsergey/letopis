import { calendarData$, commentsVisible$ } from "@/app/stores";
import { useFindManyComment } from "@/db/hooks";
import { useSelector } from "@legendapp/state/react";
import { Drawer, Group, Textarea, Button, Loader } from "@mantine/core";
import { useSession } from "next-auth/react";
import { FC } from "react";

const CalendarComponents: FC = () => {
  const id = useSelector(calendarData$.id);
  const opened = useSelector(commentsVisible$);

  const { data: session } = useSession();
  const { data: comments } = useFindManyComment({ where: { calendarId: id } });

  const disabled = !session?.user;

  return (
    <Drawer
      position="right"
      opened={opened}
      onClose={commentsVisible$.toggle}
      title="Комментарии"
    >
      <Textarea
        minRows={4}
        autosize
        maxRows={12}
        disabled={disabled}
        data-autofocus
        label="Оставить комментарий"
      />
      <Group justify="flex-end">
        <Button disabled={disabled} variant="filled" mt="sm">
          Отправить
        </Button>
      </Group>
      {comments ? <></> : <Loader size="sm" />}
    </Drawer>
  );
};

export default CalendarComponents;
