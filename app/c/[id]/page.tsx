import { notFound } from "next/navigation";

import ViewerCalendar from "@/app/c/features/ViewerCalendar";
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

  return <ViewerCalendar calendar={calendar} />;
};

export default Page;
