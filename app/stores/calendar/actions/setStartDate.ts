import { useCalendarStore } from "../calendar";

export const setStartDate = (date: Date) => {
  useCalendarStore.setState(() => ({ startDate: date }));
};
