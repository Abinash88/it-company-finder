-- CreateEnum
CREATE TYPE "timeTypes" AS ENUM ('hrs', 'min', 'sec');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddPassword" (
    "id" TEXT NOT NULL,
    "catagory" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "url" TEXT,
    "notes" TEXT,
    "image" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "AddPassword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notes" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "priority" TEXT,
    "date" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NoteTypes" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "detail" TEXT,
    "notesId" TEXT,

    CONSTRAINT "NoteTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkTime" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "time" TEXT,
    "description" TEXT,
    "alarm" TEXT,
    "timeType" "timeTypes" NOT NULL,
    "addPasswordId" TEXT,

    CONSTRAINT "WorkTime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordPinCode" (
    "id" TEXT NOT NULL,
    "pinCode" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "PasswordPinCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- AddForeignKey
ALTER TABLE "AddPassword" ADD CONSTRAINT "AddPassword_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NoteTypes" ADD CONSTRAINT "NoteTypes_notesId_fkey" FOREIGN KEY ("notesId") REFERENCES "Notes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkTime" ADD CONSTRAINT "WorkTime_addPasswordId_fkey" FOREIGN KEY ("addPasswordId") REFERENCES "AddPassword"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordPinCode" ADD CONSTRAINT "PasswordPinCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
