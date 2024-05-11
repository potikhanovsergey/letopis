import { FC, useCallback, useMemo } from "react";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { useSession } from "next-auth/react";

import { IconButton } from "@/app/components/IconButton";
import { useCreateBookmark, useDeleteBookmark } from "@/db/hooks";

import { BookmarkButtonFeatureProps } from "./BookmarkButtonFeature.typings";
import { useAsyncClick } from "@/app/hooks/useAsyncClick";

export const BookmarkButtonFeature: FC<BookmarkButtonFeatureProps> = ({
  id,
}) => {
  const session = useSession();
  const { mutateAsync: createBookmark } = useCreateBookmark();
  const { mutateAsync: deleteBookmark } = useDeleteBookmark();

  const bookmarked = useMemo(() => {
    return session.data?.user.bookmarks.some((b) => b.calendarId === id);
  }, [id, session.data]);

  const toggleBookmark = useCallback(async () => {
    if (session.data) {
      const userId = session.data.user.id;
      if (bookmarked) {
        await deleteBookmark({
          where: {
            calendarId_userId: { calendarId: id, userId },
          },
        });
      } else {
        await createBookmark({
          data: { calendarId: id, userId },
        });
      }
      await session.update();
    }
  }, [bookmarked, createBookmark, deleteBookmark, id, session]);

  const { onClick, loading } = useAsyncClick(toggleBookmark);

  if (!session.data) return null;

  return (
    <IconButton
      icon={bookmarked ? IconBookmarkFilled : IconBookmark}
      label={bookmarked ? "Убрать из сохраненного" : "Сохранить"}
      onClick={onClick}
      loading={loading}
    />
  );
};
