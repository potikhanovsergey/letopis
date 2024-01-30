import { FC } from "react";
import { Route } from "next";
import Link from "next/link";

import { CalendarCardProps } from "./CalendarCard.typings";

export const CalendarCard: FC<CalendarCardProps> = ({ title, id }) => {
  return <Link href={`/c/${id}` as Route}>{title}</Link>;
};
