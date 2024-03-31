import { FC, useCallback } from "react";
import { Button, Stack } from "@mantine/core";
import { modals } from "@mantine/modals";

import { GoogleButtonFeature } from "@/app/features/auth/GoogleButtonFeature";
import { YandexAuth } from "@/app/(fsd)/features";
import { title } from "./AuthButtonFeature.const";

export const AuthButtonFeature: FC = () => {
  const handleClick = useCallback(() => {
    modals.open({
      title,
      children: (
        <Stack gap="xs">
          <YandexAuth />
          <GoogleButtonFeature />
        </Stack>
      ),
    });
  }, []);

  return <Button onClick={handleClick}>{title}</Button>;
};
