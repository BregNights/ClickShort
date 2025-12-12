/*
  Warnings:

  - You are about to drop the `short_url` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "short_url";

-- CreateTable
CREATE TABLE "short_code" (
    "id" SERIAL NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "shortCode" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "short_code_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "short_code_shortCode_key" ON "short_code"("shortCode");

-- CreateIndex
CREATE INDEX "short_code_shortCode_idx" ON "short_code"("shortCode");
