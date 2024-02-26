import { FC } from "react";
import { useSelector } from "@legendapp/state/react";

import { calendarData$ } from "@/app/stores";
import CommentsInvoker from "@/app/c/features/CommentsInvoker";
import {
  BookmarkButtonFeature,
  ShareCalendarFeature,
} from "@/app/features/calendar/common";

const ToolbarMediaButtons: FC = () => {
  const id = useSelector(calendarData$.id);

  return (
    <>
      <BookmarkButtonFeature id={id} />
      <ShareCalendarFeature id={id} />
      <CommentsInvoker />
    </>
  );
};

export default ToolbarMediaButtons;
