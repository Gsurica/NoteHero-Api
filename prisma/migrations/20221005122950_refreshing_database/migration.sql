/*
  Warnings:

  - You are about to drop the `_CollaboratorToTask` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_CollaboratorToTask` DROP FOREIGN KEY `_CollaboratorToTask_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CollaboratorToTask` DROP FOREIGN KEY `_CollaboratorToTask_B_fkey`;

-- DropIndex
DROP INDEX `collaborators_taskId_fkey` ON `collaborators`;

-- DropTable
DROP TABLE `_CollaboratorToTask`;

-- AddForeignKey
ALTER TABLE `collaborators` ADD CONSTRAINT `collaborators_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
