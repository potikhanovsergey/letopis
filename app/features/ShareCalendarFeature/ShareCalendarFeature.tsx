"use client";
import { FC } from "react";
import { useObservable, useSelector } from "@legendapp/state/react";
import { Group, Popover, TextInput } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";

import { BASE_URL } from "@/app/app.const";
import { CopyButton } from "@/app/components/CopyButton";
import { Dropdown } from "@/app/components/Dropdown";
import { IconButton } from "@/app/components/IconButton";
import { ShareTelegram } from "@/app/components/ShareTelegram";

import { SHARE_LABEL } from "./ShareCalendarFeature.const";
import { ShareCalendarFeatureProps } from "./ShareCalendarFeature.typings";

export const ShareCalendarFeature: FC<ShareCalendarFeatureProps> = ({ id }) => {
  const opened$ = useObservable(false);

  const opened = useSelector(opened$);

  const url = `${BASE_URL}/c/${id}`;

  return (
    <Popover opened={opened} onChange={opened$.set}>
      <Popover.Target>
        <IconButton
          tooltipDisabled={opened}
          onClick={opened$.toggle}
          icon={IconShare}
          label={SHARE_LABEL}
        />
      </Popover.Target>
      <Popover.Dropdown>
        <Dropdown onClose={opened$.toggle} title={SHARE_LABEL}>
          <Group mb={4}>
            <ShareTelegram url={url} />
          </Group>
          <TextInput
            readOnly
            value={url}
            label="Ссылка на календарь"
            rightSection={<CopyButton value={url} />}
          />
        </Dropdown>
      </Popover.Dropdown>
    </Popover>
  );
};
