"use client";
import { FC, PropsWithChildren } from "react";
import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax";
import customParseFormat from "dayjs/plugin/customParseFormat";

import "dayjs/locale/ru";

dayjs.extend(minMax);
dayjs.extend(customParseFormat);
dayjs.locale("ru");

export const DatesProvider: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};
