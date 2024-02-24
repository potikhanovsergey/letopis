import dayjs, { Dayjs } from "dayjs";

export const addYear = (date?: Date | Dayjs) => {
  return dayjs(date).add(1, "y").toDate();
};
