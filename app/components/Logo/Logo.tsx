import { FC } from "react";
import { Text, UnstyledButton } from "@mantine/core";
import Link from "next/link";

export const Logo: FC = () => {
  return (
    <UnstyledButton component={Link} href="/">
      <Text fw="bold" size="xl">
        летопись
      </Text>
    </UnstyledButton>
  );
};
