import dayjs, { Dayjs } from "dayjs";

export const formatLong = (date: Date | Dayjs | null) => {
  if (!date) return null;

  return dayjs(date).format("DD MMMM YYYY");
};
