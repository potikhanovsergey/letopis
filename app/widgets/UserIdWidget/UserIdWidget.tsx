"use client";
import { FC, useMemo } from "react";
import { Menu, UnstyledButton } from "@mantine/core";
import {
  ThemeSelectFeature,
  UserAvatarFeature,
  UserInfoFeature,
} from "app/features";
import { useSession } from "next-auth/react";
import { SignoutButtonFeature } from "slices/auth/features";

export const UserIdWidget: FC = () => {
  const session = useSession();

  const userInfo = useMemo(() => {
    if (session.data) {
      return (
        <>
          <Menu.Item>
            <UserInfoFeature />
          </Menu.Item>
          <Menu.Divider />
        </>
      );
    }

    return null;
  }, [session.data]);

  return (
    <Menu width={256} closeOnItemClick={false} withArrow offset={12}>
      <Menu.Target>
        <UnstyledButton>
          <UserAvatarFeature />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {userInfo}
        <ThemeSelectFeature component={Menu.Item} />
        <SignoutButtonFeature component={Menu.Item} />
      </Menu.Dropdown>
    </Menu>
  );
};
