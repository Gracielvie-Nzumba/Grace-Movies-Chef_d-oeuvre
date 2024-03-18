-- CreateTable
CREATE TABLE "User" (
    "idUser" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "postname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dateDeNaissance" TIMESTAMP(3) NOT NULL,
    "sexe" TEXT NOT NULL,
    "pays" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "Film" (
    "idFilm" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "realisateur" TEXT NOT NULL,
    "anneeDeSortie" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "acteur" TEXT NOT NULL,
    "dureeMoyenneParEpisode" DOUBLE PRECISION NOT NULL,
    "urlDeStreaming" TEXT NOT NULL,
    "urlDeTelechargement" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Film_pkey" PRIMARY KEY ("idFilm")
);

-- CreateTable
CREATE TABLE "Serie" (
    "idSerie" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "realisateur" TEXT NOT NULL,
    "anneeDeSortie" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "acteur" TEXT NOT NULL,
    "dureeMoyenneParEpisode" DOUBLE PRECISION NOT NULL,
    "urlDeStreaming" TEXT NOT NULL,
    "urlDeTelechargement" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Serie_pkey" PRIMARY KEY ("idSerie")
);

-- CreateTable
CREATE TABLE "Telechargement" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "filmId" INTEGER NOT NULL,
    "serieId" INTEGER NOT NULL,
    "qualiteVideo" TEXT NOT NULL,
    "userIdUser" INTEGER,

    CONSTRAINT "Telechargement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avis" (
    "idAvis" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "filmId" INTEGER NOT NULL,
    "serieId" INTEGER NOT NULL,
    "comment" TEXT,

    CONSTRAINT "Avis_pkey" PRIMARY KEY ("idAvis")
);

-- CreateTable
CREATE TABLE "Favoris" (
    "idFavoris" BIGSERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "filmId" INTEGER NOT NULL,
    "serieId" INTEGER NOT NULL,

    CONSTRAINT "Favoris_pkey" PRIMARY KEY ("idFavoris")
);

-- CreateTable
CREATE TABLE "Historique" (
    "idHistorique" BIGSERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "filmId" INTEGER NOT NULL,
    "serieId" INTEGER NOT NULL,
    "dateDeVisuaisation" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Historique_pkey" PRIMARY KEY ("idHistorique")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Film" ADD CONSTRAINT "Film_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Serie" ADD CONSTRAINT "Serie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telechargement" ADD CONSTRAINT "Telechargement_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("idFilm") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telechargement" ADD CONSTRAINT "Telechargement_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Serie"("idSerie") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Telechargement" ADD CONSTRAINT "Telechargement_userIdUser_fkey" FOREIGN KEY ("userIdUser") REFERENCES "User"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avis" ADD CONSTRAINT "Avis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avis" ADD CONSTRAINT "Avis_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("idFilm") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avis" ADD CONSTRAINT "Avis_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Serie"("idSerie") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favoris" ADD CONSTRAINT "Favoris_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favoris" ADD CONSTRAINT "Favoris_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("idFilm") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favoris" ADD CONSTRAINT "Favoris_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Serie"("idSerie") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historique" ADD CONSTRAINT "Historique_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historique" ADD CONSTRAINT "Historique_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film"("idFilm") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historique" ADD CONSTRAINT "Historique_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Serie"("idSerie") ON DELETE RESTRICT ON UPDATE CASCADE;

