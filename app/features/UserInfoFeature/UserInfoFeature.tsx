import { FC } from "react";
import { ObjectInfoEntity } from "app/entities";
import { UserAvatarFeature } from "app/features";
import { useSession } from "next-auth/react";

export const UserInfoFeature: FC = () => {
  const session = useSession();

  if (!session.data) return null;

  return (
    <ObjectInfoEntity
      imageNode={<UserAvatarFeature size={40} />}
      title="Сергей Потиханов"
      subtitle={session.data.user.email}
    />
  );
};
