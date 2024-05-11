import { WithId, WithParams } from "@/app/(fsd)/app/types";
import { UserCalendarsFeature } from "@/app/features/UserCalendarsFeature";
import { getEnhancedDb } from "@/server/utils";
import { NextPage } from "next";
import { notFound } from "next/navigation";

const Page: NextPage<WithParams<WithId>> = async ({ params }) => {
  const db = await getEnhancedDb();
  const user = await db.user.findFirst({
    where: { id: params.id },
    select: { id: true, bookmarks: true, email: true, emailVerified: true },
  });

  if (!user) return notFound();

  return <UserCalendarsFeature user={user} />;
};

export default Page;
