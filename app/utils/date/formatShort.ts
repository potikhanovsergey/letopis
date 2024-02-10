import dayjs, { Dayjs } from "dayjs";

export const formatShort = (date: Date | Dayjs | null) => {
  if (!date) return null;

  return dayjs(date).format("DD.MM.YYYY");
};
