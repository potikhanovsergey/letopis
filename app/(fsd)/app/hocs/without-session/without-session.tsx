"use client";

import { Loader } from "@mantine/core";
import { useSession } from "next-auth/react";
import { ComponentType } from "react";
import { WithoutSessionOptions } from "./types";

export function withoutSession<T extends {}>(
  Component: ComponentType<T>,
  options?: WithoutSessionOptions
) {
  const loader = options?.loader ?? <Loader size="xs" />;
  const fallback = options?.loader ?? null;

  const ComponentWithoutSession = (props: T) => {
    const session = useSession();

    if (session.status === "loading") return loader;

    if (session.status === "unauthenticated" || !session.data?.user)
      return <Component {...props} />;

    return fallback;
  };

  return ComponentWithoutSession;
}
