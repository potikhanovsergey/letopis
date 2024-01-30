"use client";
import { FC, PropsWithChildren } from "react";
import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax";

import "dayjs/locale/ru";

dayjs.extend(minMax);
dayjs.locale("ru");

export const DatesProvider: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};
