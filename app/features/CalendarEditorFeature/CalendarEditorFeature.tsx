import { FC } from "react";
import { Calendar as CalendarType } from "@prisma/client";

import { Calendar } from "@/app/components/Calendar";
import { EditToolbarFeature } from "@/app/features/EditToolbarFeature";

export const CalendarEditorFeature: FC<
  Pick<CalendarType, "title" | "description">
> = ({ title, description }) => {
  return (
    <Calendar
      title={title}
      description={description}
      toolbar={<EditToolbarFeature />}
    />
  );
};
