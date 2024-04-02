-- CreateEnum
CREATE TYPE "CalendarFormat" AS ENUM ('year_week', 'month_day');

-- AlterTable
ALTER TABLE "Calendar" ADD COLUMN     "format" "CalendarFormat" NOT NULL DEFAULT 'year_week',
ALTER COLUMN "endDate" SET DEFAULT NOW() + interval '40 years';
