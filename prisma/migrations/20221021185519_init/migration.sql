-- CreateTable
CREATE TABLE "Stack" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tech" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "version" TEXT,

    CONSTRAINT "Stack_pkey" PRIMARY KEY ("id")
);
