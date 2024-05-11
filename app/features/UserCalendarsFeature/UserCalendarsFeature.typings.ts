import { Session } from "next-auth";

export interface UserCalendarsFeatureProps {
  user: Session["user"];
  title?: string;
}
