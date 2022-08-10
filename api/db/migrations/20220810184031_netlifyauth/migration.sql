/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `user_id` on the `Bcard` table. All the data in the column will be lost.
  - Added the required column `name` to the `Bcard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `netlify_id` to the `Bcard` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_id_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bcard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "netlify_id" INTEGER NOT NULL,
    "cell_number" TEXT,
    "email" TEXT,
    "name" TEXT NOT NULL,
    "profession_id" INTEGER NOT NULL,
    CONSTRAINT "Bcard_profession_id_fkey" FOREIGN KEY ("profession_id") REFERENCES "Profession" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bcard" ("id", "profession_id") SELECT "id", "profession_id" FROM "Bcard";
DROP TABLE "Bcard";
ALTER TABLE "new_Bcard" RENAME TO "Bcard";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
