-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_calendarId_fkey";

-- AlterTable
ALTER TABLE "Calendar" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '40 years';

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_calendarId_fkey" FOREIGN KEY ("calendarId") REFERENCES "Calendar"("id") ON DELETE CASCADE ON UPDATE CASCADE;
