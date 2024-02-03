import { notFound } from "next/navigation";

import { CalendarEditorFeature } from "@/app/features/CalendarEditorFeature";
import prisma from "@/db";
import { getSession } from "@/server/utils";

const Page = async ({ params }: { params: { id: string } }) => {
  const session = await getSession();

  if (!session?.user) {
    return notFound();
  }

  const calendar = await prisma.calendar.findFirst({
    where: { id: params.id, userId: session.user.id },
    include: {
      events: {
        orderBy: { date: "asc" },
      },
      timespans: {
        orderBy: { startDate: "asc" },
      },
    },
  });

  if (!calendar) {
    return notFound();
  }

  return <CalendarEditorFeature calendar={calendar} />;
};

export default Page;
