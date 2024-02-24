import { notFound } from "next/navigation";

import { CalendarEditorFeature } from "@/app/features/calendar/editor/CalendarEditorFeature";
import { calendarInclude } from "@/app/validators";
import { getEnhancedDb, getSession } from "@/server/utils";

const Page = async ({ params }: { params: { id: string } }) => {
  const session = await getSession();
  const db = await getEnhancedDb();

  if (!session) return notFound();

  const calendar = await db.calendar.findFirst({
    where: { id: params.id, userId: session?.user.id },
    include: calendarInclude,
  });

  if (!calendar) return notFound();

  return <CalendarEditorFeature calendar={calendar} />;
};

export default Page;
