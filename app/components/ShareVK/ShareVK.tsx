import { FC, useMemo } from "react";
import { Button } from "@mantine/core";
import { IconBrandVk } from "@tabler/icons-react";

import { Icon } from "@/app/components/Icon";

import { ShareVKProps } from "./ShareVK.typings";

export const ShareVK: FC<ShareVKProps> = ({ url }) => {
  const href = useMemo(() => {
    const uri = `https://vk.com/share.php?url=${url}`;

    return encodeURI(uri);
  }, [url]);

  return (
    <Button
      component="a"
      href={href}
      target="_blank"
      leftSection={<Icon As={IconBrandVk} />}
    >
      Поделиться в VK
    </Button>
  );
};
