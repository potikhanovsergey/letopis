import { FC, useMemo } from "react";
import { useSelector } from "@legendapp/state/react";

import { List } from "@/app/components/List";
import { hoveredCellTimespans$ } from "@/app/stores/calendar/computed";

export const HoveredCellTimespansFeature: FC = () => {
  const timespans = useSelector(hoveredCellTimespans$);

  const items = useMemo(
    () => timespans.map((item) => ({ id: item.id, title: item.title })),
    [timespans]
  );

  if (!timespans.length) return null;

  return <List items={items} title="Промежутки:" />;
};
