-- CreateEnum
CREATE TYPE "CalendarVisibility" AS ENUM ('hidden', 'link', 'feed');

-- CreateTable
CREATE TABLE "Calendar" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rows" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "visiiblity" "CalendarVisibility" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Calendar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Calendar" ADD CONSTRAINT "Calendar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
