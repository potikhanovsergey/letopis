import { useCalendarStore } from "@/app/stores";

export const setRows = (value: number) => {
  useCalendarStore.setState(() => ({ rows: value }));
};
