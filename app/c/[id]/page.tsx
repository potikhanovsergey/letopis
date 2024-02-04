import { notFound } from "next/navigation";

import { CalendarViewerFeature } from "@/app/features/CalendarViewerFeature";
import { calendarInclude } from "@/app/validators";
import { getEnhancedDb } from "@/server/utils";

const Page = async ({ params }: { params: { id: string } }) => {
  const db = await getEnhancedDb();

  const calendar = await db.calendar.findFirst({
    where: { id: params.id },
    include: calendarInclude,
  });

  if (!calendar) {
    return notFound();
  }

  return <CalendarViewerFeature calendar={calendar} />;
};

export default Page;
