import { batch } from "@legendapp/state";

import { hoveredColumnIndex$, hoveredRowIndex$ } from "@/app/stores";

export const resetHovered = () => {
  batch(() => {
    hoveredColumnIndex$.set(null);
    hoveredRowIndex$.set(null);
  });
};
