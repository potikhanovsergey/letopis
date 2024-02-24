import { FC, useMemo } from "react";
import { useSelector } from "@legendapp/state/react";

import { TOOLTIP_TIMESPANS_LIMIT } from "@/app/c/shared/consts";
import { List } from "@/app/components/List";
import { hoveredCellTimespans$ } from "@/app/stores/calendar/computed";

export const HoveredCellTimespansFeature: FC = () => {
  const timespans = useSelector(hoveredCellTimespans$);

  const items = useMemo(
    () =>
      timespans
        .slice(0, TOOLTIP_TIMESPANS_LIMIT)
        .map((item) => ({ id: item.id, title: item.title })),
    [timespans],
  );

  if (!timespans.length) return null;

  return (
    <List items={items} title={`Промежутки (до ${TOOLTIP_TIMESPANS_LIMIT}):`} />
  );
};
