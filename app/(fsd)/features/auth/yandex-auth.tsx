"use client";
import { Icon } from "@/app/components/Icon";
import { Button } from "@mantine/core";
import { IconBrandYandex } from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { FC, useCallback } from "react";

export const YandexAuth: FC = () => {
  const handleClick = useCallback(() => {
    signIn("yandex");
  }, []);

  return (
    <Button leftSection={<Icon As={IconBrandYandex} />} onClick={handleClick}>
      Яндекс
    </Button>
  );
};
