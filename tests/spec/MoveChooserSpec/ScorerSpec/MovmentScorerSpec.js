describe('MovmentScorer', function() {

    describe("De normal", function() {

        let taulell1 = new Taulell()
            .addFitxaEnPosicio(3, 5, new Rei(BLANC, true))
        let taulell2 = new Taulell()
            .addFitxaEnPosicio(7, 4, new Peo(BLANC, true))
            .addFitxaEnPosicio(3, 5, new Rei(BLANC, true))
        let scorer = new MovmentScorer();

        it('Ha de tornar 8 pel rei i 1 pel peó', function() {
            expect(scorer.scoreBoard(taulell1, BLANC)).toEqual(8);
            expect(scorer.scoreBoard(taulell2, BLANC)).toEqual(9);
        });
    });

    describe('Exemple3: Taulell smothered checkmate', function() {
        
        let scorer = new MovmentScorer();
        let taulellAmbPeo = new Taulell()
            .addFitxaEnPosicio(7, 0, new Rei(BLANC, true))
            .addFitxaEnPosicio(2, 3, new Rei(NEGRE, true))
            .addFitxaEnPosicio(6, 2, new Cavall(NEGRE, true))
            .addFitxaEnPosicio(6, 0, new Peo(BLANC, true))
            .addFitxaEnPosicio(6, 1, new Peo(BLANC, true))
            .addFitxaEnPosicio(7, 1, new Torre(BLANC, true));

        it('Ha de tornar true si li toca al blanc', function() {
        expect(scorer.scoreBoard(taulellAmbPeo, NEGRE)).toEqual(LlistarMovimentsValids(taulellAmbPeo, NEGRE).length);
        });
    });
    
});