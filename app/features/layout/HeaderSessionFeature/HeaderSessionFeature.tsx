"use client";
import { FC } from "react";
import { Group } from "@mantine/core";
import { useSession } from "next-auth/react";

import { UserIdFeature } from "@/app/features//layout/UserIdFeature";
import { AuthButtonFeature } from "@/app/features/auth/AuthButtonFeature";
import { CreateCalendarFeature } from "@/app/features/CreateCalendarFeature";

export const HeaderSessionFeature: FC = () => {
  const session = useSession();

  if (session.data)
    return (
      <Group>
        <CreateCalendarFeature />
        <UserIdFeature user={session.data.user} />
      </Group>
    );

  return <AuthButtonFeature />;
};
