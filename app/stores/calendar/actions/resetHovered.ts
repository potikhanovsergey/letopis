import { useCalendarStore } from "@/app/stores";

export const resetHovered = () => {
  useCalendarStore.setState(() => ({
    hoveredColumnIndex: null,
    hoveredRowIndex: null,
  }));
};
