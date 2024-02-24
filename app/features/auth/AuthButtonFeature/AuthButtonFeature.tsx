import { FC, useCallback } from "react";
import { Button, Stack } from "@mantine/core";
import { modals } from "@mantine/modals";

import { GoogleButtonFeature } from "@/app/features/auth/GoogleButtonFeature";

import { title } from "./AuthButtonFeature.const";

export const AuthButtonFeature: FC = () => {
  const handleClick = useCallback(() => {
    modals.open({
      title,
      children: (
        <Stack>
          <GoogleButtonFeature />
        </Stack>
      ),
    });
  }, []);

  return <Button onClick={handleClick}>{title}</Button>;
};
