import dayjs from "dayjs";
import { create } from "zustand";

import { CalendarStore } from "./calendar.typings";
import { getIndexesByDate } from "./utils";

export const useCalendarStore = create<CalendarStore>((set, get) => ({
  data: {
    id: "",
    title: "",
    description: "",
    rows: 60,
    startDate: new Date(),
    userId: "",
    visiiblity: "hidden",
  },
  events: [],
  hoveredRowIndex: null,
  hoveredColumnIndex: null,
  hoveredDates: () => {
    const hoveredRowIndex = get().hoveredRowIndex;
    const hoveredColumnIndex = get().hoveredColumnIndex;
    const startYearDate = dayjs(get().data.startDate).startOf("y");

    if (
      hoveredRowIndex === null ||
      hoveredColumnIndex === null
    )
      return { start: null, end: null };

    const hoveredStartDate = startYearDate
      .add(hoveredRowIndex, "y")
      .add(hoveredColumnIndex, "w");

    const hoveredYearEndDate = hoveredStartDate.endOf("y");

    const hoveredEndDate = hoveredStartDate.add(6, "d");

    console.log(getIndexesByDate({ startDate: get().data.startDate, date: hoveredStartDate.toDate() } ));
    console.log(hoveredRowIndex, hoveredColumnIndex)

    return {
      start: hoveredStartDate,
      end: dayjs.min(hoveredEndDate, hoveredYearEndDate),
    };
  },
  startDate: new Date(),
  startDateIndex: () => {
    const startDate = dayjs(get().data.startDate);
    const yearBeginning = startDate.startOf("y");

    const startIndex = startDate.diff(yearBeginning, "w");

    return startIndex;
  },
}));
