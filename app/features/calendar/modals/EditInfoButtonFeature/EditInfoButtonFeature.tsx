import { FC, useCallback } from "react";
import { MenuItem } from "@mantine/core";
import { modals } from "@mantine/modals";

import { EditInfoFormFeature } from "@/app/features/calendar/modals/EditInfoFormFeature";

import { label } from "./EditInfoButtonFeature.const";

export const EditInfoButtonFeature: FC = () => {
  const handleClick = useCallback(() => {
    modals.open({
      title: label,
      children: <EditInfoFormFeature />,
      size: "xl",
    });
  }, []);

  return <MenuItem onClick={handleClick}>{label}</MenuItem>;
};
