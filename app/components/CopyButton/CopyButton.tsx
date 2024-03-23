import { FC } from "react";
import { Button, CopyButton as MantineCopyButton } from "@mantine/core";
import { IconCheck, IconLink } from "@tabler/icons-react";

import { Icon } from "@/app/components/Icon";

import { CopyButtonProps } from "./CopyButton.typings";

export const CopyButton: FC<CopyButtonProps> = ({ value }) => {
  return (
    <MantineCopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <Button
          onClick={copy}
          variant="outline"
          leftSection={<Icon As={copied ? IconCheck : IconLink} />}
          color={copied ? "green" : undefined}
        >
          {copied ? "Скопировано" : "Скопировать ссылку"}
        </Button>
      )}
    </MantineCopyButton>
  );
};
