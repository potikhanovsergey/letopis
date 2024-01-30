import { FC } from "react";

import { CalendarsIncut } from "@/app/components/CalendarsIncut";

import { UserCalendarsFeatureProps } from "./UserCalendarsFeature.typings";

export const UserCalendarsFeature: FC<UserCalendarsFeatureProps> = ({
  user,
}) => {
  return <CalendarsIncut title="Календари" calendars={[]} />;
};
