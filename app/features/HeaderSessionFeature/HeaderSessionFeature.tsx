"use client";
import { FC, useCallback } from "react";
import { Group } from "@mantine/core";
import { Calendar } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { UserIdFeature } from "@/app/features//UserIdFeature/UserIdFeature";
import { AuthButtonFeature } from "@/app/features/AuthButtonFeature";
import { CreateCalendarFeature } from "@/app/features/CreateCalendarFeature";

export const HeaderSessionFeature: FC = () => {
  const session = useSession();
  const router = useRouter();

  const handleCalendarCreated = useCallback(
    (calendar: Calendar) => {
      router.push(`/c/${calendar.id}`);
    },
    [router]
  );

  if (session.data)
    return (
      <Group>
        <CreateCalendarFeature
          onCalendarCreated={handleCalendarCreated}
          user={session.data.user}
        />
        <UserIdFeature user={session.data.user} />
      </Group>
    );

  return <AuthButtonFeature />;
};
