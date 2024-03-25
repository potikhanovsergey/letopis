import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding");
  const calendars: Prisma.CalendarCreateManyArgs["data"] = [];

  for (let i = 0; i < 500; i++) {
    calendars.push({
      title: `Тестовый календарь № ${i}`,
      description: "Тестовый календарь для ленты",
      userId: "clt0dpgxp00009s2qijp8yq8t",
      visibility: "feed",
    });
  }

  await prisma.calendar.createMany({ data: calendars });
}

main()
  .then(async () => {
    console.log("Finished seeding");
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
