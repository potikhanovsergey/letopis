import { WithId, WithParams } from "@/app/(fsd)/app/types";
import { UserBookmarksFeature } from "@/app/features/UserBookmarksFeature";
import { getSession } from "@/server/utils";
import { NextPage } from "next";
import { notFound } from "next/navigation";

const Page: NextPage<WithParams<WithId>> = async ({ params }) => {
  const session = await getSession();

  if (session?.user.id !== params.id) return notFound();

  return <UserBookmarksFeature />;
};

export default Page;
