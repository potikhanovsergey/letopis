import { useCalendarStore } from "../calendar";

export const setHoveredIndex = (value: number | null) => {
  useCalendarStore.setState(() => ({ hoveredIndex: value }));
};
