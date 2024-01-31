import { FC } from "react";
import { IconCalendar } from "@tabler/icons-react";

import { IconButton } from "@/app/components/IconButton";
import { useEditEventsModal } from "@/app/hooks/useEditEventsModal";

import { label } from "./EditEventsButtonFeature.const";

export const EditEventsButtonFeature: FC = () => {
  const handleClick = useEditEventsModal();

  return <IconButton icon={IconCalendar} label={label} onClick={handleClick} />;
};
