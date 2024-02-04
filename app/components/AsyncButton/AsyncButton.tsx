import { FC, useCallback } from "react";
import { Box, createPolymorphicComponent } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { delayFastRequest } from "@/app/utils";

import { AsyncButtonProps } from "./AsyncButton.typings";

const AsyncButtonBase: FC<AsyncButtonProps> = ({ onClick, ...props }) => {
  const [loading, { open: startLoading, close: endLoading }] = useDisclosure();

  const handleClick = useCallback(async () => {
    startLoading();
    await delayFastRequest(onClick);
    endLoading();
  }, [endLoading, onClick, startLoading]);

  return (
    <Box<any>
      component="button"
      loading={loading}
      onClick={handleClick}
      {...props}
    />
  );
};

export const AsyncButton = createPolymorphicComponent<
  "button",
  AsyncButtonProps
>(AsyncButtonBase);
