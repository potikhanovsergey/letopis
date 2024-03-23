import { calendarData$, commentsVisible$ } from "@/app/stores";
import { useFindManyComment } from "@/db/hooks";
import { useSelector } from "@legendapp/state/react";
import { Drawer, Loader } from "@mantine/core";
import { FC } from "react";
import CommentForm from "@/app/c/features/CommentForm";

const CalendarComponents: FC = () => {
  const id = useSelector(calendarData$.id);
  const opened = useSelector(commentsVisible$);

  const { data: comments } = useFindManyComment({
    where: { calendarId: id },
    include: { user: true },
  });

  return (
    <Drawer
      position="right"
      opened={opened}
      onClose={commentsVisible$.toggle}
      title="Комментарии"
    >
      <CommentForm />
      {comments ? <></> : <Loader size="sm" />}
    </Drawer>
  );
};

export default CalendarComponents;
