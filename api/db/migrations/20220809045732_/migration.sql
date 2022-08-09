-- CreateTable
CREATE TABLE "Bcard" (
    "bcard_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "profession_id" INTEGER NOT NULL,
    CONSTRAINT "Bcard_profession_id_fkey" FOREIGN KEY ("profession_id") REFERENCES "Profession" ("profession_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bcard_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Profession" (
    "type" TEXT NOT NULL,
    "profession_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "Bcardspecialization" (
    "bcs_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "years_exp" INTEGER NOT NULL,
    "Bcard_id" INTEGER NOT NULL,
    "specialization_id" INTEGER NOT NULL,
    CONSTRAINT "Bcardspecialization_Bcard_id_fkey" FOREIGN KEY ("Bcard_id") REFERENCES "Bcard" ("bcard_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bcardspecialization_specialization_id_fkey" FOREIGN KEY ("specialization_id") REFERENCES "Specialization" ("specialization_id") ON DELETE RESTRICT ON UPDATE CASCADE
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
    "email" TEXT,
    "password" TEXT,
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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
