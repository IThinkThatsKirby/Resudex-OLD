/*
  Warnings:

  - You are about to drop the `Bcardspecialization` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `specialization1type` to the `Bcard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialization2type` to the `Bcard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialization3type` to the `Bcard` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Bcardspecialization";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bcard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "netlify_id" TEXT NOT NULL,
    "cell_number" TEXT,
    "email" TEXT,
    "name" TEXT NOT NULL,
    "profession_id" INTEGER NOT NULL,
    "specialization1type" TEXT NOT NULL,
    "specialization2type" TEXT NOT NULL,
    "specialization3type" TEXT NOT NULL,
    CONSTRAINT "Bcard_profession_id_fkey" FOREIGN KEY ("profession_id") REFERENCES "Profession" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bcard_specialization1type_fkey" FOREIGN KEY ("specialization1type") REFERENCES "Specialization" ("type") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bcard_specialization2type_fkey" FOREIGN KEY ("specialization2type") REFERENCES "Specialization" ("type") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bcard_specialization3type_fkey" FOREIGN KEY ("specialization3type") REFERENCES "Specialization" ("type") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bcard" ("cell_number", "email", "id", "name", "netlify_id", "profession_id") SELECT "cell_number", "email", "id", "name", "netlify_id", "profession_id" FROM "Bcard";
DROP TABLE "Bcard";
ALTER TABLE "new_Bcard" RENAME TO "Bcard";
CREATE TABLE "new_Specialization" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "profession_id" INTEGER NOT NULL,
    CONSTRAINT "Specialization_profession_id_fkey" FOREIGN KEY ("profession_id") REFERENCES "Profession" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Specialization" ("id", "profession_id", "type") SELECT "id", "profession_id", "type" FROM "Specialization";
DROP TABLE "Specialization";
ALTER TABLE "new_Specialization" RENAME TO "Specialization";
CREATE UNIQUE INDEX "Specialization_id_key" ON "Specialization"("id");
CREATE UNIQUE INDEX "Specialization_type_key" ON "Specialization"("type");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
