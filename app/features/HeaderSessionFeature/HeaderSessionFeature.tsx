"use client";
import { FC } from "react";
import { Button, Group } from "@mantine/core";
import { useSession } from "next-auth/react";

import { UserIdFeature } from "@/app/features//UserIdFeature/UserIdFeature";
import { AuthButtonFeature } from "@/app/features/AuthButtonFeature";

export const HeaderSessionFeature: FC = () => {
  const session = useSession();

  if (session.status === "authenticated")
    return (
      <Group>
        <Button size="compact-sm" variant="subtle">
          Создать календарь
        </Button>
        <UserIdFeature user={session.data.user} />
      </Group>
    );

  return <AuthButtonFeature />;
};
