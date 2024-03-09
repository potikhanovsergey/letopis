import { useDisclosure } from "@mantine/hooks";
import { useCallback } from "react";
import { delayFastRequest } from "@/app/utils";

export const useAsyncClick = (onClick: () => void) => {
  const [loading, { open: startLoading, close: endLoading }] = useDisclosure();
  const handleClick = useCallback(async () => {
    startLoading();
    await delayFastRequest(onClick);
    endLoading();
  }, [endLoading, onClick, startLoading]);

  return { onClick: handleClick, loading };
};
