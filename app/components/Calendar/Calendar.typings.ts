import { ReactNode } from "react";
import { Calendar } from "@prisma/client";

export interface CalendarProps
  extends Pick<Calendar, "title" | "description" | "startDate" | "endDate"> {
  toolbar?: ReactNode;
}
