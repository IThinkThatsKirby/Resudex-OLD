/*
  Warnings:

  - The primary key for the `Bcardspecialization` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `bcs_id` to the `Bcardspecialization` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bcardspecialization" (
    "bcs_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "specialization_id" INTEGER NOT NULL,
    "bcard_id" INTEGER NOT NULL,
    "years_exp" INTEGER NOT NULL
);
INSERT INTO "new_Bcardspecialization" ("bcard_id", "specialization_id", "user_id", "years_exp") SELECT "bcard_id", "specialization_id", "user_id", "years_exp" FROM "Bcardspecialization";
DROP TABLE "Bcardspecialization";
ALTER TABLE "new_Bcardspecialization" RENAME TO "Bcardspecialization";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
