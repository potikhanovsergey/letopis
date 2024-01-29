import { FC } from "react";
import { Avatar } from "@mantine/core";
import { GradientBox } from "app/ui";
import { useSession } from "next-auth/react";

import { UserAvatarFeatureProps } from "./UserAvatarFeature.typings";

export const UserAvatarFeature: FC<UserAvatarFeatureProps> = ({
  size = 24,
}) => {
  const session = useSession();

  /* TODO: Добавить аватар в модель пользователя и убрать ts-ignore */
  return (
    <Avatar
      size={size}
      h={size}
      radius="xl"
      // @ts-ignore
      src={session.data?.user.imageUrl}
    >
      <GradientBox radius="50%" size={size} />
    </Avatar>
  );
};
