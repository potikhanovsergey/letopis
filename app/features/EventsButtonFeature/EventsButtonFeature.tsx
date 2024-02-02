import { FC } from "react";
import { IconCalendar } from "@tabler/icons-react";

import { IconButton } from "@/app/components/IconButton";
import { useEventsModal } from "@/app/hooks/useEventsModal";

export const EventsButtonFeature: FC = () => {
  const handleClick = useEventsModal();

  return (
    <IconButton icon={IconCalendar} label="События" onClick={handleClick} />
  );
};
