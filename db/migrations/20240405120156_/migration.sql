-- AlterTable
ALTER TABLE "Calendar" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '40 years';
