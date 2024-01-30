import { Box } from "@mantine/core";
import { notFound } from "next/navigation";

import { EditToolbarFeature } from "@/app/features/EditToolbarFeature";
import { YearsCalendarFeature } from "@/app/features/YearsCalendarFeature";
import prisma from "@/db";

const Page = async ({ params }: { params: { id: string } }) => {
  const calendar = await prisma.calendar.findFirst({
    where: { id: params.id, visiiblity: { not: "hidden" } },
  });

  if (!calendar) {
    return notFound();
  }

  return (
    <Box mx="auto" maw={1200} pt="xl" pb={80}>
      <YearsCalendarFeature />
      <EditToolbarFeature />
    </Box>
  );
};

export default Page;
