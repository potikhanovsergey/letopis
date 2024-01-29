import { FC } from "react";
import { Avatar, Text } from "@mantine/core";

import { ObjectInfoEntityProps } from "./ObjectInfoEntity.typings";

import classes from "./ObjectInfoEntity.module.css";

export const ObjectInfoEntity: FC<ObjectInfoEntityProps> = ({
  imageNode,
  imageUrl,
  title,
  subtitle,
}) => {
  const image = imageNode || <Avatar radius="xl" src={imageUrl} />;

  return (
    <div className={classes.wrapper}>
      {image}

      <div>
        <Text className={classes.title}>{title}</Text>
        <Text size="xs" c="dimmed">
          {subtitle}
        </Text>
      </div>
    </div>
  );
};
