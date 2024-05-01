import { CalendarCardProps } from "@/app/components/CalendarCard/CalendarCard.typings";

export interface CalendarsIncutProps {
  title?: string;
  calendars: CalendarCardProps[];
  loading?: boolean;
}
