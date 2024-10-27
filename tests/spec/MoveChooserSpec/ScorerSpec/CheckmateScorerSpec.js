describe('CheckmateScorer', function() {

    describe("Amb l'SpecScorer", function() {

        let taulell1 = new Taulell()
            .addFitxaEnPosicio(0, 5, new Rei(NEGRE, false))
            .addFitxaEnPosicio(1, 5, new Reina(BLANC, false))
            .addFitxaEnPosicio(2, 5, new Rei(BLANC, false));
        let taulell2 = new Taulell()
            .addFitxaEnPosicio(4, 4, new Rei(BLANC, false))
            .addFitxaEnPosicio(0, 5, new Rei(NEGRE, false));
        let scorer = new CheckmateScorer();

        it('Ha de tornar el primer, que és el que esta en checkmate', function() {
            expect(scorer.scoreBoard(taulell1, BLANC).score).toEqual(1);
            expect(scorer.scoreBoard(taulell2, BLANC).score).toEqual(0);
        });
    });

    describe('Exemple3: Taulell smothered checkmate', function() {
        
        let scorer = new CheckmateScorer();
        let taulellAmbPeo = new Taulell()
            .addFitxaEnPosicio(7, 0, new Rei(BLANC, true))
            .addFitxaEnPosicio(2, 3, new Rei(NEGRE, true))
            .addFitxaEnPosicio(6, 2, new Cavall(NEGRE, true))
            .addFitxaEnPosicio(6, 0, new Peo(BLANC, true))
            .addFitxaEnPosicio(6, 1, new Peo(BLANC, true))
            .addFitxaEnPosicio(7, 1, new Torre(BLANC, true));

        it('Ha de tornar true si li toca al blanc', function() {
        expect(scorer.scoreBoard(taulellAmbPeo, NEGRE).score).toEqual(1);
        });
    });
    
});