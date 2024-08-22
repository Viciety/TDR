// ESCAC I MAT EN 1 TORN PEL NEGRE
let SmotheredMate = new Taulell()
    .addFitxaEnPosicio(7, 0, new Rei(BLANC, true))
    .addFitxaEnPosicio(2, 3, new Rei(NEGRE, true))
    .addFitxaEnPosicio(7, 1, new Reina(NEGRE, true))
    .addFitxaEnPosicio(5, 0, new Cavall(NEGRE, true))
    .addFitxaEnPosicio(6, 0, new Peo(BLANC, true))
    .addFitxaEnPosicio(6, 1, new Peo(BLANC, true))
    .addFitxaEnPosicio(7, 4, new Torre(BLANC, true));

// ENDGAMES VICTORIA NEGRE
let TwoVSOnePawnAndKings = new Taulell()
    .addFitxaEnPosicio(5, 2, new Rei(BLANC, true))
    .addFitxaEnPosicio(3, 3, new Rei(NEGRE, true))
    .addFitxaEnPosicio(4, 2, new Peo(NEGRE, true))
    .addFitxaEnPosicio(5, 3, new Peo(NEGRE, true))
    .addFitxaEnPosicio(3, 0, new Peo(BLANC, true));

let KingAndRookVSKingInCorner = new Taulell()
    .addFitxaEnPosicio(0, 7, new Rei(BLANC, true))
    .addFitxaEnPosicio(3, 5, new Rei(NEGRE, true))
    .addFitxaEnPosicio(7, 1, new Torre(NEGRE, true))

let SmotheredMateNegre = new Taulell()
    .addFitxaEnPosicio(7, 0, new Rei(BLANC, true))
    .addFitxaEnPosicio(2, 3, new Rei(NEGRE, true))
    .addFitxaEnPosicio(6, 2, new Cavall(NEGRE, true))
    .addFitxaEnPosicio(6, 0, new Peo(BLANC, true))
    .addFitxaEnPosicio(6, 1, new Peo(BLANC, true))
    .addFitxaEnPosicio(7, 1, new Torre(BLANC, true));

let SmotheredMateNegreIn2 = new Taulell()
    .addFitxaEnPosicio(7, 0, new Rei(BLANC, true))
    .addFitxaEnPosicio(2, 3, new Rei(NEGRE, true))
    .addFitxaEnPosicio(5, 0, new Cavall(NEGRE, true))
    .addFitxaEnPosicio(7, 1, new Reina(NEGRE, true))
    .addFitxaEnPosicio(6, 0, new Peo(BLANC, true))
    .addFitxaEnPosicio(6, 1, new Peo(BLANC, true))
    .addFitxaEnPosicio(7, 7, new Torre(BLANC, true))