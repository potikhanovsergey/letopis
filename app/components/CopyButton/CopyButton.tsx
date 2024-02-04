import { FC } from "react";
import { CopyButton as MantineCopyButton } from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";

import { IconButton } from "@/app/components/IconButton";

import { CopyButtonProps } from "./CopyButton.typings";

export const CopyButton: FC<CopyButtonProps> = ({ value }) => {
  return (
    <MantineCopyButton value={value} timeout={2000}>
      {({ copied, copy }) => (
        <IconButton
          onClick={copy}
          icon={copied ? IconCheck : IconCopy}
          variant="transparent"
          color={copied ? "green" : undefined}
          label={copied ? "Скопировано" : "Скопировать"}
        />
      )}
    </MantineCopyButton>
  );
};
