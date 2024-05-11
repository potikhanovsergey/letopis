"use client";
import { FC } from "react";
import { useSession } from "next-auth/react";

import { UserCalendarsFeature } from "@/app/features/UserCalendarsFeature";

export const CurrentUserCalendarsFeature: FC = () => {
  const session = useSession();

  if (!session.data?.user) return null;

  return <UserCalendarsFeature user={session.data.user} />;
};
