import { Dayjs } from "dayjs";

const getLabel = (date: Date) => {
  return date.toLocaleString("ru-ru", { weekday: "long" });
};

export const getDayOfWeekLabel = (date: Date | Dayjs | null) => {
  if (!date) return "";

  if (date instanceof Date) {
    return getLabel(date);
  }

  return getLabel(date.toDate());
};
