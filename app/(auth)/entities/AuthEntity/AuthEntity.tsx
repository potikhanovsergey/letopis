import { FC } from "react";
import { Box, Stack, Title } from "@mantine/core";

import { AuthEntityProps } from "./AuthEntity.typings";

export const AuthEntity: FC<AuthEntityProps> = ({
  title,
  form,
  bottomNode,
}) => {
  return (
    <Box w="100%">
      <Title mb="lg" ta="center">
        {title}
      </Title>
      <Stack>
        {form}
        {bottomNode}
      </Stack>
    </Box>
  );
};
