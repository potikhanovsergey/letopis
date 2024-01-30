import { useCalendarStore } from "@/app/stores";

export const setHoveredRowIndex = (value: number | null) => {
  useCalendarStore.setState(() => ({ hoveredRowIndex: value }));
};
