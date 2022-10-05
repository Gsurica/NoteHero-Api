-- DropForeignKey
ALTER TABLE `collaborators` DROP FOREIGN KEY `collaborators_taskId_fkey`;

-- CreateTable
CREATE TABLE `_CollaboratorToTask` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CollaboratorToTask_AB_unique`(`A`, `B`),
    INDEX `_CollaboratorToTask_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CollaboratorToTask` ADD CONSTRAINT `_CollaboratorToTask_A_fkey` FOREIGN KEY (`A`) REFERENCES `collaborators`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CollaboratorToTask` ADD CONSTRAINT `_CollaboratorToTask_B_fkey` FOREIGN KEY (`B`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
