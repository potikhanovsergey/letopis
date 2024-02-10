"use client";
import { FC, PropsWithChildren } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { ModalsProvider as MantineModalsProvider } from "@mantine/modals";

export const ModalsProvider: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <MantineModalsProvider modalProps={{ fullScreen: isMobile }}>
      {children}
    </MantineModalsProvider>
  );
};
