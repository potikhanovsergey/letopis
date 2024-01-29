"use client";
import { FC } from "react";
import { useSession } from "next-auth/react";

export const Session: FC = () => {
  const { data } = useSession();

  return <>{JSON.stringify(data)}</>;
};
