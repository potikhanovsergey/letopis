import { FC, useCallback } from "react";
import { modals } from "@mantine/modals";
import { IconEdit } from "@tabler/icons-react";

import { Icon } from "@/app/components/Icon";
import { IconButton } from "@/app/components/IconButton";
import { EditInfoModalFeature } from "@/app/features/EditInfoModalFeature";

import { label } from "./EditInfoButtonFeature.const";

export const EditInfoButtonFeature: FC = () => {
  const handleClick = useCallback(() => {
    modals.open({
      title: label,
      children: <EditInfoModalFeature />,
    });
  }, []);

  return (
    <IconButton onClick={handleClick} label={label}>
      <Icon As={IconEdit} />
    </IconButton>
  );
};
