"use client";
import { FC } from "react";
import { Button, MenuItem } from "@mantine/core";
import Link from "next/link";
import { Route } from "next";
import { withSession } from "@/app/(fsd)/app/hocs";
import { WithSessionProps } from "@/app/(fsd)/app/types";
import { ProfileButtonFeatureProps } from "./ProfileButtonFeature.types";

const ProfileButtonFeatureBase: FC<
  WithSessionProps & ProfileButtonFeatureProps
> = ({ user, type }) => {
  const href = `/profile/${user.id}` as Route;
  const text = "Мой профиль";

  if (type === "button") {
    return (
      <Button component={Link} href={href}>
        {text}
      </Button>
    );
  }

  return (
    <MenuItem component={Link} href={href}>
      {text}
    </MenuItem>
  );
};

export const ProfileButtonFeature = withSession(ProfileButtonFeatureBase);
