-- AlterTable
ALTER TABLE "Calendar" ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '40 years';

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "description" TEXT,
ADD COLUMN     "referenceLink" TEXT;

-- AlterTable
ALTER TABLE "Timespan" ADD COLUMN     "description" TEXT,
ADD COLUMN     "referenceLink" TEXT;
