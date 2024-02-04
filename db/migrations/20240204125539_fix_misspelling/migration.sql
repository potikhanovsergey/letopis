/*
  Warnings:

  - You are about to drop the column `visiiblity` on the `Calendar` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Calendar" DROP COLUMN "visiiblity",
ADD COLUMN     "visibility" "CalendarVisibility" NOT NULL DEFAULT 'hidden',
ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '40 years';
