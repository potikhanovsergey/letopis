import { SelectProps } from "@mantine/core";
import { CalendarVisibility } from "@prisma/client";

export const VISIBILITY_LABELS: { [key in CalendarVisibility]: string } = {
  hidden: "Только для меня",
  feed: "В ленте и по ссылке",
  link: "Только по ссылке",
};

export const VISIBILITY_DATA: SelectProps["data"] = Object.keys(
  VISIBILITY_LABELS
).map((k) => ({
  label: VISIBILITY_LABELS[k as CalendarVisibility],
  value: k,
}));
