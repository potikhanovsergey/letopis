import { calendarData$, commentsVisible$ } from "@/app/stores";
import { useFindManyComment } from "@/db/hooks";
import { useSelector } from "@legendapp/state/react";
import { Drawer, Loader } from "@mantine/core";
import { FC, useMemo } from "react";
import CommentForm from "@/app/c/features/CommentForm";
import Comments from "@/app/c/components/Comments";

const CalendarComponents: FC = () => {
  const id = useSelector(calendarData$.id);
  const opened = useSelector(commentsVisible$);

  const { data, isFetching } = useFindManyComment({
    where: { calendarId: id },
    include: { user: { select: { name: true, image: true } } },
    orderBy: { createdAt: "desc" },
  });

  const comments = useMemo(() => {
    if (!data) return [];

    return data.map((item) => ({
      name: item.user.name ?? "",
      message: item.message,
      id: item.id,
      createdAt: item.createdAt,
      imageUrl: item.user.image,
    }));
  }, [data]);

  return (
    <Drawer
      position="right"
      opened={opened}
      onClose={commentsVisible$.toggle}
      title="Комментарии"
    >
      <CommentForm />
      {isFetching ? <Loader size="sm" /> : <Comments comments={comments} />}
    </Drawer>
  );
};

export default CalendarComponents;
