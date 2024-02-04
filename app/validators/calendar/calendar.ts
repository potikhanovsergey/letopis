import { calendarIncludeValidator } from ".";

export const calendarInclude = calendarIncludeValidator({
  events: {
    orderBy: { date: "asc" },
  },
  timespans: {
    orderBy: { startDate: "asc" },
  },
});
