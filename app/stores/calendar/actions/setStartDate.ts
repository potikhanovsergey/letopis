import { useCalendarStore } from "@/app/stores";

export const setStartDate = (date: Date) => {
  useCalendarStore.setState(() => ({ startDate: date }));
};
