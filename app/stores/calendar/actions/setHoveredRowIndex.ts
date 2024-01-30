import { useCalendarStore } from "../calendar";

export const setHoveredRowIndex = (value: number | null) => {
  useCalendarStore.setState(() => ({ hoveredRowIndex: value }));
};
