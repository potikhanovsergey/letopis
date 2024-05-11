import { FC, useCallback } from "react";
import { Button, Stack } from "@mantine/core";
import { modals } from "@mantine/modals";

import { GoogleButtonFeature } from "@/app/features/auth/GoogleButtonFeature";
import { YandexAuth } from "@/app/(fsd)/features";
import { title } from "./AuthButtonFeature.const";
import { withoutSession } from "@/app/(fsd)/app/hocs";

const AuthButtonFeatureBase: FC = () => {
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

export const AuthButtonFeature = withoutSession(AuthButtonFeatureBase);
