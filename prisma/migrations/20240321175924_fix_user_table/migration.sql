-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_provinceId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "provinceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE SET NULL ON UPDATE CASCADE;
