"use client";
import { FC } from "react";
import { Avatar, Menu, UnstyledButton } from "@mantine/core";

import { SignoutButtonFeature } from "@/app/features/auth";

import { UserIdFeatureProps } from "./UserIdFeature.typings";

export const UserIdFeature: FC<UserIdFeatureProps> = ({ user }) => {
  return (
    <Menu>
      <Menu.Target>
        <UnstyledButton>
          <Avatar size="sm" src={user?.image} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <SignoutButtonFeature component={Menu.Item} />
      </Menu.Dropdown>
    </Menu>
  );
};
