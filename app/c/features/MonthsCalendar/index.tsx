"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { batch } from "@legendapp/state";
import { useSelector } from "@legendapp/state/react";
import { Box, Skeleton } from "@mantine/core";
import { range } from "@mantine/hooks";

import Cell from "@/app/c/features/Cell";
import RowHints from "@/app/c/components/RowHints";
import { FloatingInfoFeature } from "@/app/features/FloatingInfoFeature";
import {
  hasInitialized$,
  hoveredColumnIndex$,
  hoveredRowIndex$,
} from "@/app/stores/calendar";
import { resetHovered } from "@/app/stores/calendar/actions";
import { endDateIndex$, startDateIndex$ } from "@/app/stores/calendar/computed";
import { rowsCount$ } from "@/app/stores/calendar/computed/rowsCount";
import MonthsGrid from "@/app/c/components/MonthsGrid";

const array31 = range(0, 30);

const MonthsCalendar = () => {
  const startDateIndex = useSelector(startDateIndex$);
  const endDateIndex = useSelector(endDateIndex$);
  const rowsCount = useSelector(rowsCount$);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(
    ({ rowIndex, columnIndex }: { rowIndex: number; columnIndex: number }) => {
      batch(() => {
        hoveredRowIndex$.set(rowIndex);
        hoveredColumnIndex$.set(columnIndex);
      });
      timeoutRef.current && clearTimeout(timeoutRef.current);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      resetHovered();
    }, 300);
  }, []);

  useEffect(() => {
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, []);

  const hasInitialized = useSelector(hasInitialized$);

  if (!hasInitialized) return <Skeleton h={640} />;

  return (
    <Box pos="relative">
      <FloatingInfoFeature>
        <div>
          <Box style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
            <RowHints />
            <MonthsGrid>
              {/* Первый ряд клеток может быть меньше из-за стартовой даты */}
              {startDateIndex !== 0 && (
                <span
                  style={{
                    gridArea: `1 / 1 / 2 / ${startDateIndex + 1}`,
                  }}
                />
              )}

              {/* TODO: рендерить через рэндж без return null */}
              {array31.map((columnIndex) => {
                if (columnIndex < startDateIndex) return null;

                return (
                  <Cell
                    rowIndex={0}
                    columnIndex={columnIndex}
                    key={columnIndex}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}

              {/* Все кроме последнего ряда полные */}
              {/* Со второго ряда до предпоследнего */}
              {range(1, rowsCount - 2).map((rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {array31.map((columnIndex) => (
                    <Cell
                      rowIndex={rowIndex}
                      columnIndex={columnIndex}
                      key={columnIndex}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                </React.Fragment>
              ))}

              {/* Последний ряд клеток может быть меньше из-за стартовой даты */}
              {range(0, endDateIndex).map((columnIndex) => {
                return (
                  <Cell
                    rowIndex={rowsCount - 1}
                    columnIndex={columnIndex}
                    key={columnIndex}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
            </MonthsGrid>
          </Box>
        </div>
      </FloatingInfoFeature>
    </Box>
  );
};

export default MonthsCalendar;
