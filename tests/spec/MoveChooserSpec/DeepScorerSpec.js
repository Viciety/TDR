describe('Deep Scorer', function() {

    describe("Amb una profunditat que no sigui un número", function() {

        it('Ha de fer un throw', function() {
            expect(function(){new DeepScorer(new Array())}).toThrow('Invalid Deepness: '+new Array());
            expect(function(){new DeepScorer(10)}).not.toThrow('Invalid Deepness: '+10);
        });

    });

    describe("Amb l'SpecScorer", function() {

        let taulell1 = new Taulell()
            .addFitxaEnPosicio(4, 5, new Cavall(BLANC, false))
            .addFitxaEnPosicio(0, 1, new Cavall(NEGRE, false));
        let taulell2 = new Taulell()
            .addFitxaEnPosicio(3, 2, new Cavall(BLANC, false))
            .addFitxaEnPosicio(2, 2, new Cavall(NEGRE, false));
        let scorer = new SpecScorer(taulell1)
        let deep = new DeepScorer(2, scorer);

        it('Ha de tornar el doble de la puntuacio del SpecScorer', function() {
            expect(deep.scoreBoard(taulell2, BLANC)).toEqual(101);
        });

    });

    describe("Amb dos SpecScorers", function() {

        let taulell1 = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(BLANC, false));
        let scorer1 = new Array(new Array(new SpecScorer(taulell1), 2), new Array(new SpecScorer(taulell1), 2));
        let composed = new ComposedScorer(scorer1);

        it('Ha de tornar dos cops el doble de la puntuacio del SpecScorer', function() {
            expect(composed.composeScorers(taulell1, BLANC)).toEqual(404);
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
            expect(composed.composeScorers(taulell1, BLANC)).toEqual(202);
        });

    });
});