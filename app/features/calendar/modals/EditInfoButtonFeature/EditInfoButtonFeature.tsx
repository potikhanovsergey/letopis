import { FC, useCallback } from "react";
import { MenuItem } from "@mantine/core";
import { modals } from "@mantine/modals";

import { EditInfoModalFeature } from "@/app/features/calendar/modals/EditInfoModalFeature";

import { label } from "./EditInfoButtonFeature.const";

export const EditInfoButtonFeature: FC = () => {
  const handleClick = useCallback(() => {
    modals.open({
      title: label,
      children: <EditInfoModalFeature />,
    });
  }, []);

  return <MenuItem onClick={handleClick}>{label}</MenuItem>;
};
