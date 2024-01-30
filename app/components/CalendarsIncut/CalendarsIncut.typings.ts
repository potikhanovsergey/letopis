import { Calendar } from "@prisma/client";

export interface CalendarsIncutProps {
  title: string;
  calendars: Calendar[];
}
