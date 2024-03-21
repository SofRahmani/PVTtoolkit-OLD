/*
  Warnings:

  - You are about to alter the column `taxe` on the `Province` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `price` on the `article` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "Province" ALTER COLUMN "taxe" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "article" ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30);
