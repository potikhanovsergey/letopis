import { Box } from "@mantine/core";
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
    },
  });

  if (!calendar) {
    return notFound();
  }

  return (
    <Box pt="md" pb={80}>
      <CalendarEditorFeature calendar={calendar} />
    </Box>
  );
};

export default Page;
