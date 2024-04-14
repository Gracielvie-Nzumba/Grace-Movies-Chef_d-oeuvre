/*
  Warnings:

  - You are about to drop the `Avis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Favoris` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Film` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Historique` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Serie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Telechargement` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Avis" DROP CONSTRAINT "Avis_filmId_fkey";

-- DropForeignKey
ALTER TABLE "Avis" DROP CONSTRAINT "Avis_serieId_fkey";

-- DropForeignKey
ALTER TABLE "Avis" DROP CONSTRAINT "Avis_userId_fkey";

-- DropForeignKey
ALTER TABLE "Favoris" DROP CONSTRAINT "Favoris_filmId_fkey";

-- DropForeignKey
ALTER TABLE "Favoris" DROP CONSTRAINT "Favoris_serieId_fkey";

-- DropForeignKey
ALTER TABLE "Favoris" DROP CONSTRAINT "Favoris_userId_fkey";

-- DropForeignKey
ALTER TABLE "Film" DROP CONSTRAINT "Film_userId_fkey";

-- DropForeignKey
ALTER TABLE "Historique" DROP CONSTRAINT "Historique_filmId_fkey";

-- DropForeignKey
ALTER TABLE "Historique" DROP CONSTRAINT "Historique_serieId_fkey";

-- DropForeignKey
ALTER TABLE "Historique" DROP CONSTRAINT "Historique_userId_fkey";

-- DropForeignKey
ALTER TABLE "Serie" DROP CONSTRAINT "Serie_userId_fkey";

-- DropForeignKey
ALTER TABLE "Telechargement" DROP CONSTRAINT "Telechargement_filmId_fkey";

-- DropForeignKey
ALTER TABLE "Telechargement" DROP CONSTRAINT "Telechargement_serieId_fkey";

-- DropForeignKey
ALTER TABLE "Telechargement" DROP CONSTRAINT "Telechargement_userIdUser_fkey";

-- DropTable
DROP TABLE "Avis";

-- DropTable
DROP TABLE "Favoris";

-- DropTable
DROP TABLE "Film";

-- DropTable
DROP TABLE "Historique";

-- DropTable
DROP TABLE "Serie";

-- DropTable
DROP TABLE "Telechargement";
