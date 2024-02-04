import { notFound } from "next/navigation";

import { CalendarViewerFeature } from "@/app/features/CalendarViewerFeature";
import { calendarInclude } from "@/app/validators";
import prisma from "@/db";

const Page = async ({ params }: { params: { id: string } }) => {
  const calendar = await prisma.calendar.findFirst({
    where: { id: params.id, visiiblity: { not: "hidden" } },
    include: calendarInclude,
  });

  if (!calendar) {
    return notFound();
  }

  return <CalendarViewerFeature calendar={calendar} />;
};

export default Page;
