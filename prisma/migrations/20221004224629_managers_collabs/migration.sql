/*
  Warnings:

  - You are about to drop the column `userId` on the `collaborators` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `collaborators` DROP FOREIGN KEY `collaborators_userId_fkey`;

-- AlterTable
ALTER TABLE `collaborators` DROP COLUMN `userId`;

-- CreateTable
CREATE TABLE `_CollaboratorToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CollaboratorToUser_AB_unique`(`A`, `B`),
    INDEX `_CollaboratorToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_CollaboratorToUser` ADD CONSTRAINT `_CollaboratorToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `collaborators`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CollaboratorToUser` ADD CONSTRAINT `_CollaboratorToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
