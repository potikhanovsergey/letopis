import { SelectProps } from "@mantine/core";
import { CalendarFormat, CalendarVisibility } from "@prisma/client";

export const VISIBILITY_LABELS: { [key in CalendarVisibility]: string } = {
  hidden: "Только для меня",
  feed: "В ленте и по ссылке",
  link: "Только по ссылке",
};

export const FORMAT_LABELS: { [key in CalendarFormat]: string } = {
  year_week: "Год-Неделя",
  month_day: "Месяц-День",
};

export const FORMAT_DATA: SelectProps["data"] = Object.keys(FORMAT_LABELS).map(
  (k) => ({ label: FORMAT_LABELS[k as CalendarFormat], value: k })
);

export const VISIBILITY_DATA: SelectProps["data"] = Object.keys(
  VISIBILITY_LABELS
).map((k) => ({
  label: VISIBILITY_LABELS[k as CalendarVisibility],
  value: k,
}));

export const BASE_URL = process.env.BASE_URL!;

export const MAX_ROWS = 400;
