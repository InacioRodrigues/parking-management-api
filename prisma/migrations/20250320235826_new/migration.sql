/*
  Warnings:

  - A unique constraint covering the columns `[telefone]` on the table `estabelecimentos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "estabelecimentos_telefone_key" ON "estabelecimentos"("telefone");
