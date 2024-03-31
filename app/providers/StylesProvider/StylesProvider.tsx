"use client";
import { FC, PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";

import { cssVariablesResolver, theme } from "@/app/theme";

import "@mantine/core/styles.layer.css";
import "@mantine/dates/styles.css";

export const StylesProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider
      defaultColorScheme="auto"
      cssVariablesResolver={cssVariablesResolver}
      theme={theme}
    >
      {children}
    </MantineProvider>
  );
};
