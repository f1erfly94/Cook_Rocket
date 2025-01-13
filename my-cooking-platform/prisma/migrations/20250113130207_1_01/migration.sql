/*
  Warnings:

  - Made the column `prepTime` on table `Recipe` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Recipe" ALTER COLUMN "prepTime" SET NOT NULL,
ALTER COLUMN "prepTime" SET DATA TYPE TEXT,
ALTER COLUMN "cookTime" SET DATA TYPE TEXT,
ALTER COLUMN "totalTime" SET DATA TYPE TEXT;
