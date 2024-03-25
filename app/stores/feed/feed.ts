import { observable } from "@legendapp/state";
import { Prisma } from "@prisma/client";

export const feedFilter$ = observable(
  {} as Prisma.CalendarFindManyArgs["where"]
);
