-- AlterTable
ALTER TABLE `Task` ADD COLUMN `collaboratorId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_collaboratorId_fkey` FOREIGN KEY (`collaboratorId`) REFERENCES `collaborators`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
