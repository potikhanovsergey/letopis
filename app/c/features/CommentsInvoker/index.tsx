"use client";
import { FC } from "react";
import { IconMessage2 } from "@tabler/icons-react";

import { IconButton } from "@/app/components/IconButton";
import { commentsVisible$ } from "@/app/stores";

const CommentsInvoker: FC = () => {
  return (
    <IconButton
      onClick={commentsVisible$.toggle}
      label="Комментарии"
      icon={IconMessage2}
    />
  );
};

export default CommentsInvoker;
