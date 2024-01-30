import { useCalendarStore } from "@/app/stores";

export const setHoveredColumnIndex = (value: number | null) => {
  useCalendarStore.setState(() => ({ hoveredColumnIndex: value }));
};
