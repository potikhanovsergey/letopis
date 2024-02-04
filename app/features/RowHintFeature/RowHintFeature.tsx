import { FC } from "react";
import { useSelector } from "@legendapp/state/react";

import { RCHint } from "@/app/components/RCHint";
import { startYearNumber$ } from "@/app/stores/calendar/computed";

import { RowHintFeatureProps } from "./RowHintFeature.typings";

export const RowHintFeature: FC<RowHintFeatureProps> = ({ index }) => {
  const startYearNumber = useSelector(startYearNumber$);

  return <RCHint>{startYearNumber + index}</RCHint>;
};
