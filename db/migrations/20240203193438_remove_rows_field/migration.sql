/*
  Warnings:

  - You are about to drop the column `rows` on the `Calendar` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Calendar" DROP COLUMN "rows",
ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '40 years';
