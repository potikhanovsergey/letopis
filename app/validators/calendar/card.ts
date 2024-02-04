import { calendarSelectValidator } from ".";

export const calendarCardSelect = calendarSelectValidator({
  updatedAt: true,
  previewUrl: true,
  title: true,
  id: true,
  startDate: true,
  endDate: true,
  user: {
    select: {
      image: true,
      name: true,
    },
  },
});
