import { Avatar, Group, Text } from "@mantine/core";
import { FC } from "react";
import { CommentProps } from "./typings";
import dayjs from "dayjs";

const Comment: FC<CommentProps> = ({ name, imageUrl, createdAt, message }) => {
  return (
    <div>
      <Group>
        <Avatar src={imageUrl} alt={name} radius="xl" />
        <div>
          <Text fw="bold" size="sm">
            {name}
          </Text>
          <Text size="xs">{dayjs(createdAt).format("DD.MM.YYYY, HH:mm ")}</Text>
        </div>
      </Group>
      <Text pl={54} pt={4} size="sm">
        {message}
      </Text>
    </div>
  );
};

export default Comment;
