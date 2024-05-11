"use client";

import { Loader } from "@mantine/core";
import { useSession } from "next-auth/react";
import { ComponentType } from "react";
import { WithSessionOptions } from "./types";
import { WithSessionProps } from "@/app/(fsd)/app/types";

export function withSession<T>(
  Component: ComponentType<T>,
  options?: WithSessionOptions
) {
  const loader = options?.loader ?? <Loader size="xs" />;
  const fallback = options?.loader ?? null;

  const ComponentWithSession = (props: Omit<T, keyof WithSessionProps>) => {
    const session = useSession();

    if (session.status === "loading") return loader;

    if (session.status === "unauthenticated" || !session.data?.user)
      return fallback;

    return <Component user={session.data.user} {...(props as T)} />;
  };

  return ComponentWithSession;
}
