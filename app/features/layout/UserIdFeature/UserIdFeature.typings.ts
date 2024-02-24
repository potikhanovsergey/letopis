import { Session } from "next-auth";

export interface UserIdFeatureProps {
  user: Session["user"];
}
