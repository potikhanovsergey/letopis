import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Image, Skeleton } from "@mantine/core";

import { calendarData$, hasInitialized$ } from "@/app/stores";

const MAW = 320;
const h = (320 / 16) * 9;

export const CalendarPreviewFeature: FC = () => {
  const previewUrl = useSelector(calendarData$.previewUrl);
  const title = useSelector(calendarData$.title);
  const hasInitialized = useSelector(hasInitialized$);

  if (!hasInitialized) return <Skeleton w={MAW} h={h} />;

  return (
    <Image
      maw={MAW}
      style={{ aspectRatio: "16/9" }}
      src={previewUrl || "/card-bg.jpg"}
      alt={title}
    />
  );
};
