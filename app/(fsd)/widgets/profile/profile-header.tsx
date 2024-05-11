import { ProfileHeaderEntity } from "@/app/(fsd)/entities/profile";
import { FC } from "react";
import { ProfileHeaderWidgetProps } from "./types";

export const ProfileHeaderWidget: FC<ProfileHeaderWidgetProps> = ({
  name,
  imageUrl,
}) => {
  return <ProfileHeaderEntity title={name} imageUrl={imageUrl ?? undefined} />;
};
