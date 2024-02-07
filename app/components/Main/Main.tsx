import { FC, PropsWithChildren } from "react";
import { AppShellMain, Box } from "@mantine/core";

export const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppShellMain>
      <Box pt="md" pb={80}>
        {children}
      </Box>
    </AppShellMain>
  );
};
