import { FC, useCallback } from "react";
import { modals } from "@mantine/modals";
import { IconSettings } from "@tabler/icons-react";

import { Icon } from "@/app/components/Icon";
import { IconButton } from "@/app/components/IconButton";
import { SettingsModalFeature } from "@/app/features/SettingsModalFeature";

import { label } from "./SettingsButtonFeature.const";

export const SettingsButtonFeature: FC = () => {
  const handleClick = useCallback(() => {
    modals.open({
      title: label,
      children: <SettingsModalFeature />,
    });
  }, []);

  return (
    <IconButton onClick={handleClick} label={label}>
      <Icon As={IconSettings} />
    </IconButton>
  );
};
