-- AlterTable
ALTER TABLE "Calendar" ADD COLUMN     "previewUrl" TEXT,
ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '40 years';
