import { Event } from "@prisma/client";

export interface UpdateEventFormFeatureProps {
  onUpdated?: () => void;
  event: Event;
}
