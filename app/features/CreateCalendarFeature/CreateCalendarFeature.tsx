"use client";
import { FC, useCallback } from "react";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { useCreateCalendar } from "@/db/hooks";

export const CreateCalendarFeature: FC = () => {
  const { mutateAsync: createCalendar, isPending } = useCreateCalendar();

  const session = useSession();
  const router = useRouter();

  const handleClick = useCallback(async () => {
    const calendar = await createCalendar({
      data: {
        title: "Новый календарь",
        description: "Описание календаря",
        userId: session.data?.user.id || "",
      },
    });
    if (calendar) {
      router.push(`/c/${calendar.id}`);
    }
  }, [createCalendar, router, session.data]);

  if (!session.data) return null;

  return (
    <Button size="compact-sm" loading={isPending} onClick={handleClick}>
      Создать календарь
    </Button>
  );
};
