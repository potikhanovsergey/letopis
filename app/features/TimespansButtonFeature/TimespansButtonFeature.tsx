import { FC } from "react";
import { IconGridDots } from "@tabler/icons-react";

import { IconButton } from "@/app/components/IconButton";
import { useTimespansModal } from "@/app/hooks/useTimespansModal";

export const TimespansButtonFeature: FC = () => {
  const handleClick = useTimespansModal();

  return (
    <IconButton onClick={handleClick} icon={IconGridDots} label="Промежутки" />
  );
};
