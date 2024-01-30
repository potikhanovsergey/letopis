import { FC } from "react";

import { Calendar } from "@/app/components/Calendar";
import { EditToolbarFeature } from "@/app/features/EditToolbarFeature";

export const CalendarEditorFeature: FC = () => {
  return <Calendar toolbar={<EditToolbarFeature />} />;
};
