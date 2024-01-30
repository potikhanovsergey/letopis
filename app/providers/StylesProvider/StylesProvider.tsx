"use client";
import { FC, PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";

import { theme } from "@/app/theme";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

export const StylesProvider: FC<PropsWithChildren> = ({ children }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
