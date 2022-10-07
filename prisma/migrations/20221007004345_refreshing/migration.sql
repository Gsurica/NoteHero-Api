/*
  Warnings:

  - Added the required column `timeDiff` to the `timetrackers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `timetrackers` ADD COLUMN `timeDiff` INTEGER NOT NULL;
