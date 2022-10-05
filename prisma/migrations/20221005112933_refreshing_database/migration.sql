/*
  Warnings:

  - You are about to drop the column `collaboratorId` on the `Task` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Task` DROP FOREIGN KEY `Task_collaboratorId_fkey`;

-- AlterTable
ALTER TABLE `Task` DROP COLUMN `collaboratorId`;

-- AlterTable
ALTER TABLE `collaborators` ADD COLUMN `taskId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `collaborators` ADD CONSTRAINT `collaborators_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
