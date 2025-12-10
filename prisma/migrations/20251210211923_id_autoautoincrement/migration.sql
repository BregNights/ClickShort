/*
  Warnings:

  - The primary key for the `short_url` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `short_url` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "short_url" DROP CONSTRAINT "short_url_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "expiresAt" DROP NOT NULL,
ADD CONSTRAINT "short_url_pkey" PRIMARY KEY ("id");
