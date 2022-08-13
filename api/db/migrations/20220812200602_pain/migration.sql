-- CreateTable
CREATE TABLE "Bcard" (
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

-- CreateTable
CREATE TABLE "Profession" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Specialization" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "profession_id" INTEGER NOT NULL,
    CONSTRAINT "Specialization_profession_id_fkey" FOREIGN KEY ("profession_id") REFERENCES "Profession" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Profession_id_key" ON "Profession"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Profession_type_key" ON "Profession"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Specialization_id_key" ON "Specialization"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Specialization_type_key" ON "Specialization"("type");
