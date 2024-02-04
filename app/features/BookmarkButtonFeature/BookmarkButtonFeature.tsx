import { FC, useCallback, useMemo } from "react";
import { useDisclosure } from "@mantine/hooks";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { useSession } from "next-auth/react";

import { IconButton } from "@/app/components/IconButton";
import { delayFastRequest } from "@/app/utils";
import { useCreateBookmark, useDeleteBookmark } from "@/db/hooks";

import { BookmarkButtonFeatureProps } from "./BookmarkButtonFeature.typings";

export const BookmarkButtonFeature: FC<BookmarkButtonFeatureProps> = ({
  id,
}) => {
  const session = useSession();
  const { mutateAsync: createBookmark } = useCreateBookmark();
  const { mutateAsync: deleteBookmark } = useDeleteBookmark();

  const [loading, { close: endLoading, open: startLoading }] = useDisclosure();

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

  const handleClick = useCallback(async () => {
    startLoading();
    await delayFastRequest(toggleBookmark);
    endLoading();
  }, [endLoading, startLoading, toggleBookmark]);

  if (!session.data) return null;

  return (
    <IconButton
      onClick={handleClick}
      loading={loading}
      icon={bookmarked ? IconBookmarkFilled : IconBookmark}
      label={bookmarked ? "Убрать из закладок" : "Добавить в закладки"}
    />
  );
};
