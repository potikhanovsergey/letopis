"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { Box, Text } from "@mantine/core";

import { RCHint } from "@/app/components/RCHint";
import { RowLabels } from "@/app/components/RowLabels";
import { YearsGrid } from "@/app/components/YearsGrid";
import { CellFeature } from "@/app/features/CellFeature";
import { FloatingInfoFeature } from "@/app/features/FloatingInfoFeature";
import { useCalendarStore } from "@/app/stores";
import { resetHovered } from "@/app/stores/calendar/actions";

const array53 = [...Array(53)];

export const YearsCalendarFeature = () => {
  const startDateIndex = useCalendarStore((state) => state.startDateIndex());
  const rows = useCalendarStore((state) => state.data.rows);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(
    ({ rowIndex, columnIndex }: { rowIndex: number; columnIndex: number }) => {
      useCalendarStore.setState({
        hoveredRowIndex: rowIndex,
        hoveredColumnIndex: columnIndex,
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

  return (
    <Box pos="relative">
      <Text fw="bold">Недели</Text>
      <RowLabels />

      <FloatingInfoFeature>
        <div>
          <YearsGrid>
            <span />

            {/* Первый ряд состоит из лэйблов недель */}
            {array53.map((e, columnIndex) => {
              if (columnIndex % 5 === 0 || columnIndex === 52)
                return <RCHint key={columnIndex}>{columnIndex + 1}</RCHint>;

              return <span key={columnIndex} />;
            })}

            <RCHint>1</RCHint>

            {/* Первый ряд клеток может быть меньше из-за стартовой даты */}

            {array53.map((e, columnIndex) => {
              if (columnIndex < startDateIndex)
                return <span onMouseEnter={resetHovered} key={columnIndex} />;

              return (
                <CellFeature
                  rowIndex={0}
                  columnIndex={columnIndex}
                  key={columnIndex}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              );
            })}

            {/* Остальные ряды нормальные */}

            {[...Array(rows - 1)].map((e, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {rowIndex % 5 === 4 || rowIndex === rows - 2 ? (
                  <RCHint>{rowIndex + 2}</RCHint>
                ) : (
                  <span />
                )}
                {[...Array(53)].map((e, columnIndex) => (
                  <CellFeature
                    rowIndex={rowIndex + 1}
                    columnIndex={columnIndex}
                    key={columnIndex}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </React.Fragment>
            ))}
          </YearsGrid>
        </div>
      </FloatingInfoFeature>
    </Box>
  );
};
