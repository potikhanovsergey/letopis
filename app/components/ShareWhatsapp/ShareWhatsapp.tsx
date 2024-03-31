import { FC, useMemo } from "react";
import { Button } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";

import { Icon } from "@/app/components/Icon";

import { ShareWhatsappProps } from "./ShareWhatsapp.typings";

export const ShareWhatsapp: FC<ShareWhatsappProps> = ({ url }) => {
  const href = useMemo(() => {
    const uri = `https://api.whatsapp.com/send?text=${url}`;

    return encodeURI(uri);
  }, [url]);

  return (
    <Button
      component="a"
      href={href}
      target="_blank"
      leftSection={<Icon As={IconBrandWhatsapp} />}
    >
      Поделиться в Whatsapp
    </Button>
  );
};
