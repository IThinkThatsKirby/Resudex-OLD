/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "user";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BusinessCard" (
    "businessCardId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jobSeekerId" INTEGER NOT NULL,
    CONSTRAINT "BusinessCard_jobSeekerId_fkey" FOREIGN KEY ("jobSeekerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Job" (
    "jobTypeId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "jobType" TEXT NOT NULL DEFAULT 'Software Engineer',
    "businessCardId" INTEGER,
    CONSTRAINT "Job_businessCardId_fkey" FOREIGN KEY ("businessCardId") REFERENCES "BusinessCard" ("businessCardId") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SkillType" (
    "skillTypeId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "skill" TEXT NOT NULL,
    "skillExperienceInYears" INTEGER NOT NULL,
    "JobTypeId" INTEGER,
    CONSTRAINT "SkillType_JobTypeId_fkey" FOREIGN KEY ("JobTypeId") REFERENCES "Job" ("jobTypeId") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
