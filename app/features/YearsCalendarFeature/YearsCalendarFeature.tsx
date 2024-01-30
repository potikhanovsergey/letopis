"use client";
import { useCallback } from "react";
import React from "react";

import { ColumnLabels } from "@/app/components/ColumnLabels";
import { YearsGrid } from "@/app/components/YearsGrid";
import { CellFeature } from "@/app/features/CellFeature";
import { FloatingInfoFeature } from "@/app/features/FloatingInfoFeature";
import { useCalendarStore } from "@/app/stores";
import {
  setHoveredColumnIndex,
  setHoveredIndex,
  setHoveredRowIndex,
} from "@/app/stores/calendar/actions";

const array53 = [...Array(53)];

export const YearsCalendarFeature = () => {
  const startDateIndex = useCalendarStore((state) => state.startDateIndex());
  const rows = useCalendarStore((state) => state.rows);

  const resetHoveredIndexes = useCallback(() => {
    setHoveredIndex(null);
    setHoveredRowIndex(null);
    setHoveredColumnIndex(null);
  }, []);

  return (
    <div>
      <ColumnLabels pb="md" />
      <FloatingInfoFeature>
        <div>
          <YearsGrid>
            {array53.map((e, columnIndex) => {
              if (columnIndex < startDateIndex)
                return (
                  <span onMouseEnter={resetHoveredIndexes} key={columnIndex} />
                );

              return (
                <CellFeature
                  rowIndex={0}
                  columnIndex={columnIndex}
                  index={columnIndex}
                  key={columnIndex}
                />
              );
            })}

            {[...Array(rows - 1)].map((e, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {[...Array(53)].map((e, columnIndex) => (
                  <CellFeature
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                    index={(rowIndex + 1) * 53 + columnIndex}
                    key={columnIndex}
                  />
                ))}
              </React.Fragment>
            ))}
          </YearsGrid>
        </div>
      </FloatingInfoFeature>
    </div>
  );
};
