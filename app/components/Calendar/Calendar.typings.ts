import { ReactNode } from "react";

export interface CalendarProps {
  title: string;
  description: string;
  startDate: Date;
  toolbar?: ReactNode;
}
