import { Calendar } from "@prisma/client";
import { Session } from "next-auth";

export interface CreateCalendarFeatureProps {
  user: Session["user"];
  onCalendarCreated?: (calendar: Calendar) => void;
}
