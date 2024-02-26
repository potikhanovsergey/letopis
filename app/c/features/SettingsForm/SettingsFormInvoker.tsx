import { FC, useCallback } from "react";
import { MenuItem } from "@mantine/core";
import { modals } from "@mantine/modals";

import { SettingsForm } from "./";

import { LABEL } from "./consts";

const SettingsFormInvoker: FC = () => {
  const handleClick = useCallback(() => {
    modals.open({
      title: LABEL,
      children: <SettingsForm />,
    });
  }, []);

  return <MenuItem onClick={handleClick}>{LABEL}</MenuItem>;
};

export default SettingsFormInvoker;
