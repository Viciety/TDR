describe('Composed Scorer', function() {

    describe("Amb un input que no sigui una array", function() {

        it('Ha de fer un throw', function() {
            expect(function(){new ComposedScorer(1, 100);}).toThrow('Input must be an array: 100');
        });

    });

    describe("Amb l'SpecScorer", function() {

        let taulell1 = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(BLANC, false));
        let scorer = new Array(new Array(new SpecScorer(taulell1), 2));
        let composed = new ComposedScorer(new SpecScorer(taulell1), scorer);

        it('Ha de tornar el doble de la puntuacio del SpecScorer', function() {
            expect(composed.scoreBoard(taulell1, BLANC).getNumericScore()).toEqual(202);
        });

    });

    describe("Amb dos SpecScorers", function() {

        let taulell1 = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(BLANC, false));
        let scorer1 = new Array(new Array(new SpecScorer(taulell1), 2), new Array(new SpecScorer(taulell1), 2));
        let composed = new ComposedScorer(new SpecScorer(taulell1), scorer1);

        it('Ha de tornar dos cops el doble de la puntuacio del SpecScorer', function() {
            expect(composed.scoreBoard(taulell1, BLANC).getNumericScore()).toEqual(404);
        });

    });

    describe("Amb dos SpecScorers", function() {

        let taulell1 = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(BLANC, false));
        let taulell2 = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(BLANC, false))
            .addFitxaEnPosicio(2, 5, new Rei(NEGRE, false));
        let scorer1 = new Array(new Array(new SpecScorer(taulell1), 2), new Array(new SpecScorer(taulell2), 2));
        let composed = new ComposedScorer(new SpecScorer(), scorer1);

        it('Ha de tornar dos cops la puntuacio del SpecScorer', function() {
            expect(composed.scoreBoard(taulell1, BLANC).getNumericScore()).toEqual(202);
        });

    });

    describe('Taulell smothered checkmate i checkmate scorer', function() {
        let scorer1 = new Array(new Array(new CheckmateScorer(), 1));
        let composed = new ComposedScorer(new CheckmateScorer(), scorer1);
        
        let taulellAmbPeo = new Taulell()
            .addFitxaEnPosicio(7, 0, new Rei(BLANC, true))
            .addFitxaEnPosicio(2, 3, new Rei(NEGRE, true))
            .addFitxaEnPosicio(6, 2, new Cavall(NEGRE, true))
            .addFitxaEnPosicio(6, 0, new Peo(BLANC, true))
            .addFitxaEnPosicio(6, 1, new Peo(BLANC, true))
            .addFitxaEnPosicio(7, 1, new Torre(BLANC, true));

        it('Ha de tornar 1 pel negre', function() {
        expect(composed.scoreBoard(taulellAmbPeo, NEGRE).checkmateScore).toEqual(1);
        });
    });
});