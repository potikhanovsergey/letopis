import { Prisma } from "@prisma/client";

export const calendarValidator = Prisma.validator<Prisma.CalendarSelect>();
