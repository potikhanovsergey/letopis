"use client";
import { FC, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Provider as GeneratedHooksProvider } from "@/db/hooks";

const queryClient = new QueryClient();

export const ZenstackHooksProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GeneratedHooksProvider value={{ endpoint: "/api/model" }}>
        {children}
      </GeneratedHooksProvider>
    </QueryClientProvider>
  );
};
