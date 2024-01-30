import { Box } from "@mantine/core";
import { notFound } from "next/navigation";

import { EditToolbarFeature } from "@/app/features/EditToolbarFeature";
import { YearsCalendarFeature } from "@/app/features/YearsCalendarFeature";
import prisma from "@/db";

const Page = async ({ params }: { params: { id: string } }) => {
  const calendar = await prisma.calendar.findFirst({
    where: { id: params.id },
  });

  if (!calendar) {
    return notFound();
  }

  return (
    <main>
      <Box mx="auto" maw={1200} pt="xl" pb={80}>
        {/* <KeyValue
          k="Стартовая дата"
          v={dayjs(startDate).format("DD.MM.YYYY")}
        /> */}
        <YearsCalendarFeature />
        <EditToolbarFeature />
      </Box>
    </main>
  );
};

export default Page;
