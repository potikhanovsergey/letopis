import { FC, useCallback } from "react";
import { MenuItem } from "@mantine/core";
import { modals } from "@mantine/modals";

import { SettingsModalFeature } from "@/app/features/SettingsModalFeature";

import { label } from "./SettingsButtonFeature.const";

export const SettingsButtonFeature: FC = () => {
  const handleClick = useCallback(() => {
    modals.open({
      title: label,
      children: <SettingsModalFeature />,
    });
  }, []);

  return <MenuItem onClick={handleClick}>{label}</MenuItem>;
};
