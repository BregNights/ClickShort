/*
  Warnings:

  - You are about to drop the column `expiresAt` on the `short_code` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."short_code" DROP COLUMN "expiresAt";
