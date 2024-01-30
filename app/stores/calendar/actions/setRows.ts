import { useCalendarStore } from "../calendar";

export const setRows = (value: number) => {
  useCalendarStore.setState(() => ({ rows: value }));
};
