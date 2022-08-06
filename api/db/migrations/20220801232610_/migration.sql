/*
  Warnings:

  - Added the required column `jobExp` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearsInIndustry` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "name" TEXT,
    "email" TEXT NOT NULL,
    "jobExp" INTEGER NOT NULL,
    "yearsInIndustry" INTEGER NOT NULL,
    "memberSince" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO "new_user" ("email", "memberSince", "name", "userId") SELECT "email", "memberSince", "name", "userId" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
