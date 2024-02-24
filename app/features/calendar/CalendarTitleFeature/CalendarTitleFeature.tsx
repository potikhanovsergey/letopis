import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Skeleton, Title } from "@mantine/core";

import { calendarData$, hasInitialized$ } from "@/app/stores";

export const CalendarTitleFeature: FC = () => {
  const title = useSelector(calendarData$.title);
  const hasInitialized = useSelector(hasInitialized$);

  if (!hasInitialized) return <Skeleton h={40} />;

  return (
    <Title order={1} textWrap="balance">
      {title}
    </Title>
  );
};
