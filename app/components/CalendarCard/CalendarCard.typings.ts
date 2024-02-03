import { Calendar, User } from "@prisma/client";

type CalendarPicked = Pick<
  Calendar,
  "id" | "title" | "updatedAt" | "previewUrl" | "startDate" | "endDate"
>;

type UserPicked = Pick<User, "name" | "image">;

export interface CalendarCardProps extends CalendarPicked {
  user: UserPicked;
}
