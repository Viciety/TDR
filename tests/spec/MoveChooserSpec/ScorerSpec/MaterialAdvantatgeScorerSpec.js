describe('MaterialAdvantatgeScorer', function() {

    describe("Amb l'SpecScorer", function() {

        let taulell1 = new Taulell()
            .addFitxaEnPosicio(0, 5, new Rei(NEGRE, false))
            .addFitxaEnPosicio(1, 5, new Reina(BLANC, false))
            .addFitxaEnPosicio(2, 5, new Rei(BLANC, false));
        let taulell2 = new Taulell()
            .addFitxaEnPosicio(4, 4, new Rei(BLANC, false))
            .addFitxaEnPosicio(0, 5, new Rei(NEGRE, false));
        let scorer = new MaterialAdvantatgeScorer();

        it('Ha de tornar el primer, que és el que esta en checkmate', function() {
            expect(scorer.scoreBoard(taulell1, BLANC)).toEqual(9);
            expect(scorer.scoreBoard(taulell2, BLANC)).toEqual(0);
        });

    });
});