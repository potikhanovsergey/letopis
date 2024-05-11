import { Box } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <Box py="xl">{children}</Box>;
};
