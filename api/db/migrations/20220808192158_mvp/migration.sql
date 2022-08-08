-- CreateTable
CREATE TABLE "Bcard" (
    "bcard_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "profession_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "Bcard_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Profession" (
    "type" TEXT NOT NULL,
    "profession_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "Bcardspecialization" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "specialization_id" INTEGER NOT NULL,
    "bcard_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Specialization" (
    "specialization_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "profession_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "user_type_id" INTEGER NOT NULL DEFAULT 1
);

-- CreateIndex
CREATE UNIQUE INDEX "Bcard_bcard_id_key" ON "Bcard"("bcard_id");

-- CreateIndex
CREATE UNIQUE INDEX "Profession_type_key" ON "Profession"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Profession_profession_id_key" ON "Profession"("profession_id");

-- CreateIndex
CREATE UNIQUE INDEX "Specialization_specialization_id_key" ON "Specialization"("specialization_id");

-- CreateIndex
CREATE UNIQUE INDEX "Specialization_type_key" ON "Specialization"("type");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_id_key" ON "User"("user_id");
