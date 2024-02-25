import { FC } from "react";
import { Button } from "@mantine/core";

import { useUpdateTimespanModal } from "@/app/hooks/useUpdateTimespanModal";

import { UpdateTimespanFeatureProps } from "./UpdateTimespanFeature.typings";

export const UpdateTimespanFeature: FC<UpdateTimespanFeatureProps> = ({
  timespan,
}) => {
  const openUpdateTimespanModal = useUpdateTimespanModal(timespan);

  return (
    <Button onClick={openUpdateTimespanModal} variant="subtle">
      Редактировать
    </Button>
  );
};
