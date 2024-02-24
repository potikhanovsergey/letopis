import { FC, useMemo } from "react";
import { useSelector } from "@legendapp/state/react";

import { TOOLTIP_EVENTS_LIMIT } from "@/app/c/shared/consts";
import { List } from "@/app/components/List";
import { hoveredCellEvents$ } from "@/app/stores/calendar/computed/hoveredCellEvents";

export const HoveredCellEventsFeature: FC = () => {
  const events = useSelector(hoveredCellEvents$);

  const items = useMemo(
    () =>
      events
        .slice(0, TOOLTIP_EVENTS_LIMIT)
        .map((item) => ({ id: item.id, title: item.title })),
    [events],
  );

  if (!events.length) return null;

  return <List items={items} title={`События (до ${TOOLTIP_EVENTS_LIMIT}):`} />;
};
