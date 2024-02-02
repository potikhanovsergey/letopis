-- CreateTable
CREATE TABLE "Timespan" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "color" TEXT NOT NULL,
    "calendarId" TEXT NOT NULL,

    CONSTRAINT "Timespan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Timespan" ADD CONSTRAINT "Timespan_calendarId_fkey" FOREIGN KEY ("calendarId") REFERENCES "Calendar"("id") ON DELETE CASCADE ON UPDATE CASCADE;
