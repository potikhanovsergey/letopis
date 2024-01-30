import { useCalendarStore } from "@/app/stores";

export const setHoveredIndex = (value: number | null) => {
  useCalendarStore.setState(() => ({ hoveredIndex: value }));
};
