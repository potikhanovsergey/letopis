import { useCalendarStore } from "../calendar";

export const setHoveredColumnIndex = (value: number | null) => {
  useCalendarStore.setState(() => ({ hoveredColumnIndex: value }));
};
