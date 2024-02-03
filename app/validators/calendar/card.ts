import { calendarValidator } from ".";

export const calendarCardSelect = calendarValidator({
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
