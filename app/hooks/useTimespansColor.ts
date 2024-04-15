import { useMemo } from "react";
import { Timespan } from "@prisma/client";

const getTimespansColor = (timespans: Timespan[]) => {
  if (!timespans.length) return undefined;
  if (timespans.length === 1) return timespans[0].color;

  const percentage = 100 / timespans.length;
  let count = 0;
  let gradient: string = "";
  for (let i = 0; i < timespans.length; i++) {
    const timespan = timespans[i];
    gradient += `${timespan.color} ${count}%, `;
    count += percentage;
    gradient += `${timespan.color} ${count}%`;
    if (i !== timespans.length - 1) {
      gradient += `, `;
    }
  }

  return `linear-gradient(${gradient})`;
}

export const useTimespansColor = (timespans: Timespan[]) => {
  return useMemo(() => {
    return getTimespansColor(timespans);
  }, [timespans]);
};

