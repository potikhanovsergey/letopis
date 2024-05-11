import { Session } from "next-auth";

export type GptEvent = {
  title: string;
  date: string;
};

export type SuggestionEvent = {
  title: string;
  date: Date;
  icon: string;
};

export interface WithSessionProps {
  user: Session["user"];
}
