import { FC, useMemo } from "react";
import { Button } from "@mantine/core";
import { IconBrandTelegram } from "@tabler/icons-react";

import { Icon } from "@/app/components/Icon";

import { ShareTelegramProps } from "./ShareTelegram.typings";

export const ShareTelegram: FC<ShareTelegramProps> = ({ url }) => {
  const href = useMemo(() => {
    const uri = `https://t.me/share/url?url=${url}`;

    return encodeURI(uri);
  }, [url]);

  return (
    <Button
      component="a"
      href={href}
      target="_blank"
      leftSection={<Icon As={IconBrandTelegram} />}
    >
      Поделиться в Telegram
    </Button>
  );
};
