import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Skeleton, Spoiler, TypographyStylesProvider } from "@mantine/core";

import { calendarData$, hasInitialized$ } from "@/app/stores";

export const CalendarDescriptionFeature: FC = () => {
  const description = useSelector(calendarData$.description);
  const hasInitialized = useSelector(hasInitialized$);

  if (!hasInitialized) return <Skeleton h={24} />;

  if (!description) return null;

  return (
    <Spoiler
      maxHeight={240}
      showLabel="Читать полное описание"
      hideLabel="Скрыть описание"
    >
      <TypographyStylesProvider>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </TypographyStylesProvider>
    </Spoiler>
  );
};
