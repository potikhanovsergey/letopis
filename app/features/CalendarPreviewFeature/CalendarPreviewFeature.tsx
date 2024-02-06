import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Skeleton } from "@mantine/core";

import { CalendarPreviewImage } from "@/app/components/CalendarPreviewImage";
import { calendarData$, hasInitialized$ } from "@/app/stores";

const MAW = 320;
const h = (320 / 16) * 9;

export const CalendarPreviewFeature: FC = () => {
  const previewUrl = useSelector(calendarData$.previewUrl);
  const title = useSelector(calendarData$.title);
  const hasInitialized = useSelector(hasInitialized$);

  console.log(hasInitialized);

  if (!hasInitialized) return <Skeleton w={MAW} h={h} />;

  return <CalendarPreviewImage maw={MAW} alt={title} src={previewUrl} />;
};
