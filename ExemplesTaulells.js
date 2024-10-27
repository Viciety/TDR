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

// COMPROVACIÓ ENROC 
let TaulellEnroc = new Taulell()
    .addFitxaEnPosicio(7, 4, new Rei(BLANC, false))
    .addFitxaEnPosicio(0, 4, new Rei(NEGRE, false))
    .addFitxaEnPosicio(0, 7, new Torre(NEGRE, false))
    .addFitxaEnPosicio(7, 0, new Torre(BLANC, false))

// TAULELL AMB REIS
let TaulellBuit = new Taulell()
    .addFitxaEnPosicio(7, 4, new Rei(BLANC, false))
    .addFitxaEnPosicio(0, 4, new Rei(NEGRE, false))

//AVAVNTATGE MATERIAL NEGRE
let CaptureReinaNegre2 = new Taulell()
    .addFitxaEnPosicio(0, 0, new Rei(BLANC, true))
    .addFitxaEnPosicio(2, 3, new Rei(NEGRE, true))
    .addFitxaEnPosicio(6, 2, new Torre(BLANC, true))
    .addFitxaEnPosicio(7, 1, new Reina(BLANC, true))
    .addFitxaEnPosicio(5, 0, new Cavall(NEGRE, true));

let CaptureReinaNegre = new Taulell()
    .addFitxaEnPosicio(0, 0, new Rei(BLANC, true))
    .addFitxaEnPosicio(2, 3, new Rei(NEGRE, true))
    .addFitxaEnPosicio(7, 1, new Reina(BLANC, true))
    .addFitxaEnPosicio(5, 0, new Cavall(NEGRE, true));

// KASPAROV VS DEEPBLUE 1996
let KasparovVSDeepBlue1996 = new Taulell()
    .addFitxaEnPosicio(0, 0, new Torre(NEGRE, false))
    .addFitxaEnPosicio(0, 2, new Alfil(NEGRE, false))
    .addFitxaEnPosicio(0, 3, new Reina(NEGRE, false))
    .addFitxaEnPosicio(0, 4, new Rei(NEGRE, false))
    .addFitxaEnPosicio(0, 5, new Alfil(NEGRE, false))
    .addFitxaEnPosicio(0, 7, new Torre(NEGRE, true))
    .addFitxaEnPosicio(1, 0, new Peo(NEGRE, false))
    .addFitxaEnPosicio(1, 1, new Peo(NEGRE, false))
    .addFitxaEnPosicio(2, 2, new Peo(NEGRE, true))
    .addFitxaEnPosicio(1, 3, new Cavall(NEGRE, true))
    .addFitxaEnPosicio(2, 4, new Peo(NEGRE, true))
    .addFitxaEnPosicio(1, 5, new Peo(NEGRE, false))
    .addFitxaEnPosicio(2, 5, new Cavall(NEGRE, true))
    .addFitxaEnPosicio(1, 6, new Peo(NEGRE, false))
    .addFitxaEnPosicio(2, 7, new Peo(NEGRE, true))

    .addFitxaEnPosicio(3, 6, new Cavall(BLANC, true))
    .addFitxaEnPosicio(4, 3, new Peo(BLANC, true))
    .addFitxaEnPosicio(5, 3, new Alfil(BLANC, true))
    .addFitxaEnPosicio(5, 5, new Cavall(BLANC, true))
    
    .addFitxaEnPosicio(6, 0, new Peo(BLANC, false))
    .addFitxaEnPosicio(6, 1, new Peo(BLANC, false))
    .addFitxaEnPosicio(6, 2, new Peo(BLANC, false))
    .addFitxaEnPosicio(6, 5, new Peo(BLANC, false))
    .addFitxaEnPosicio(6, 6, new Peo(BLANC, false))
    .addFitxaEnPosicio(6, 7, new Peo(BLANC, false))

    .addFitxaEnPosicio(7, 0, new Torre(BLANC, false))
    .addFitxaEnPosicio(7, 2, new Alfil(BLANC, false))
    .addFitxaEnPosicio(7, 3, new Reina(BLANC, false))
    .addFitxaEnPosicio(7, 4, new Rei(BLANC, false))
    .addFitxaEnPosicio(7, 7, new Torre(BLANC, false));

//HANS NIEMMAN VS MAGNUS CARLSEN
let HansVSCarlsen = new Taulell()
    .addFitxaEnPosicio(0, 2, new Torre(NEGRE, true))
    .addFitxaEnPosicio(0, 6, new Rei(NEGRE, true))
    .addFitxaEnPosicio(1, 3, new Reina(NEGRE, true))
    .addFitxaEnPosicio(1, 4, new Torre(NEGRE, true))
    .addFitxaEnPosicio(1, 6, new Peo(NEGRE, false))
    .addFitxaEnPosicio(2, 2, new Alfil(NEGRE, true))
    .addFitxaEnPosicio(2, 3, new Peo(NEGRE, true))
    .addFitxaEnPosicio(3, 4, new Peo(NEGRE, true))
    .addFitxaEnPosicio(4, 2, new Peo(NEGRE, true))
    .addFitxaEnPosicio(4, 5, new Cavall(NEGRE, true))

    .addFitxaEnPosicio(2, 0, new Torre(BLANC, true))
    .addFitxaEnPosicio(2, 1, new Torre(BLANC, true))
    .addFitxaEnPosicio(2, 4, new Cavall(BLANC, true))
    .addFitxaEnPosicio(3, 5, new Peo(BLANC, true))
    .addFitxaEnPosicio(3, 6, new Reina(BLANC, true))

    .addFitxaEnPosicio(5, 2, new Peo(BLANC, true))
    .addFitxaEnPosicio(5, 7, new Peo(BLANC, true))
    .addFitxaEnPosicio(6, 1, new Peo(BLANC, false))
    .addFitxaEnPosicio(6, 5, new Peo(BLANC, false))
    .addFitxaEnPosicio(6, 6, new Peo(BLANC, false))
    .addFitxaEnPosicio(7, 6, new Rei(BLANC, true))



