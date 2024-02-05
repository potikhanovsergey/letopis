"use client";
import { FC } from "react";
import { Popover, Stack, Text } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";

import { BASE_URL } from "@/app/app.const";
import { CopyButton } from "@/app/components/CopyButton";
import { IconButton } from "@/app/components/IconButton";
import { ShareTelegram } from "@/app/components/ShareTelegram";
import { ShareVK } from "@/app/components/ShareVK";
import { ShareWhatsapp } from "@/app/components/ShareWhatsapp";

import { SHARE_LABEL } from "./ShareCalendarFeature.const";
import { ShareCalendarFeatureProps } from "./ShareCalendarFeature.typings";

export const ShareCalendarFeature: FC<ShareCalendarFeatureProps> = ({ id }) => {
  const url = `${BASE_URL}/c/${id}`;

  return (
    <Popover>
      <Popover.Target>
        <IconButton icon={IconShare} label={SHARE_LABEL} />
      </Popover.Target>
      <Popover.Dropdown p="xs">
        <Text fw="bold" mb="xs">
          Поделиться календарем
        </Text>

        <Stack gap={4}>
          <ShareTelegram url={url} />
          <ShareVK url={url} />
          <ShareWhatsapp url={url} />
          <CopyButton value={url} />
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};
