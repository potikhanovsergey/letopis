import { Prisma } from "@prisma/client";

export const calendarSelectValidator =
  Prisma.validator<Prisma.CalendarSelect>();

export const calendarIncludeValidator =
  Prisma.validator<Prisma.CalendarInclude>();
