import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Skeleton } from "@mantine/core";

import { CalendarPreviewImage } from "@/app/components/CalendarPreviewImage";
import { calendarData$, hasInitialized$ } from "@/app/stores";

const MAW = 500;
const h = (MAW / 16) * 9;

const CalendarPreview: FC = () => {
  const previewUrl = useSelector(calendarData$.previewUrl);
  const title = useSelector(calendarData$.title);
  const hasInitialized = useSelector(hasInitialized$);

  if (!hasInitialized) return <Skeleton w={MAW} h={h} />;

  return <CalendarPreviewImage maw={MAW} alt={title} src={previewUrl} />;
};

export default CalendarPreview;
