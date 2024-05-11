import { Avatar, Title } from "@mantine/core";
import { FC } from "react";
import { ProfileHeaderProps } from "./types";
import classes from "./styles.module.css";
import classnames from "classnames";

export const ProfileHeaderEntity: FC<ProfileHeaderProps> = ({
  imageUrl,
  title,
  subtitle,
  rightSection,
}) => {
  return (
    <div className={classes.container}>
      <Avatar
        src={imageUrl}
        alt={title}
        size="100%"
        className={classes.image}
      />
      <div className={classnames(classes.container, classes.rightContainer)}>
        <div className={classes.rightContainer__left}>
          <Title size={24} className={classes.title}>
            {title}
          </Title>
          {subtitle}
        </div>
        {rightSection}
      </div>
    </div>
  );
};
