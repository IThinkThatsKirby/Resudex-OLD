-- CreateTable
CREATE TABLE "Bcard" (
    "id" SERIAL NOT NULL,
    "selfie" TEXT NOT NULL,
    "netlify_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cell_number" TEXT,
    "email" TEXT,
    "was_updated" BOOLEAN DEFAULT false,
    "profession" TEXT NOT NULL,
    "specialization1" TEXT NOT NULL,
    "specialization1exp" INTEGER NOT NULL,
    "spreference1" TEXT,
    "specialization2" TEXT,
    "specialization2exp" INTEGER,
    "spreference2" TEXT,
    "specialization3" TEXT,
    "specialization3exp" INTEGER,
    "spreference3" TEXT,

    CONSTRAINT "Bcard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "netlify_id" TEXT,
    "selfie_id" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VersionBcard" (
    "id" SERIAL NOT NULL,
    "selfie" TEXT NOT NULL,
    "netlify_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cell_number" TEXT,
    "email" TEXT,
    "was_updated" BOOLEAN DEFAULT false,
    "was_deleted" BOOLEAN DEFAULT false,
    "profession" TEXT NOT NULL,
    "specialization1" TEXT NOT NULL,
    "specialization1exp" INTEGER NOT NULL,
    "spreference1" TEXT,
    "specialization2" TEXT,
    "specialization2exp" INTEGER,
    "spreference2" TEXT,
    "specialization3" TEXT,
    "specialization3exp" INTEGER,
    "spreference3" TEXT,

    CONSTRAINT "VersionBcard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserResudex" (
    "id" SERIAL NOT NULL,
    "netlify_id" TEXT NOT NULL,
    "bcard_id" INTEGER,

    CONSTRAINT "UserResudex_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserResudex" ADD CONSTRAINT "UserResudex_bcard_id_fkey" FOREIGN KEY ("bcard_id") REFERENCES "Bcard"("id") ON DELETE SET NULL ON UPDATE CASCADE;
