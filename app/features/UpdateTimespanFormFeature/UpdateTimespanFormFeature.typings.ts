import { Timespan } from "@prisma/client";

export interface UpdateTimespanFormFeatureProps {
  onUpdated?: () => void;
  timespan: Timespan;
}
