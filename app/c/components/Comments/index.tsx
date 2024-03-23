import { FC } from "react";
import { CommentsProps } from "./typings";
import { Stack } from "@mantine/core";
import Comment from "@/app/c/components/Comment";

const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <Stack>
      {comments.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}
    </Stack>
  );
};

export default Comments;
