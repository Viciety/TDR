describe('Composed Scorer', function() {

    describe("Amb un input que no sigui una array", function() {

        it('Ha de fer un throw', function() {
            expect(function(){new ComposedScorer(100);}).toThrow('Input must be an array: 100');
        });

    });

    describe("Amb l'SpecScorer", function() {

        let taulell1 = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(BLANC, false));
        let scorer = new Array(new Array(new SpecScorer(taulell1), 2));
        let composed = new ComposedScorer(scorer);

        it('Ha de tornar el doble de la puntuacio del SpecScorer', function() {
            expect(composed.scoreBoard(taulell1, BLANC)).toEqual(202);
        });

    });

    describe("Amb dos SpecScorers", function() {

        let taulell1 = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(BLANC, false));
        let scorer1 = new Array(new Array(new SpecScorer(taulell1), 2), new Array(new SpecScorer(taulell1), 2));
        let composed = new ComposedScorer(scorer1);

        it('Ha de tornar dos cops el doble de la puntuacio del SpecScorer', function() {
            expect(composed.scoreBoard(taulell1, BLANC)).toEqual(404);
        });

    });

    describe("Amb dos SpecScorers", function() {

        let taulell1 = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(BLANC, false));
        let taulell2 = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(BLANC, false))
            .addFitxaEnPosicio(2, 5, new Rei(NEGRE, false));
        let scorer1 = new Array(new Array(new SpecScorer(taulell1), 2), new Array(new SpecScorer(taulell2), 2));
        let composed = new ComposedScorer(scorer1);

        it('Ha de tornar dos cops el doble de la puntuacio del SpecScorer', function() {
            expect(composed.scoreBoard(taulell1, BLANC)).toEqual(202);
        });

    });
});