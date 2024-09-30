describe('Comprartoria Scores composed', function() {

    describe("Amb dos ComposedScores", function() {

        let score1 = new ComposedScore(1, undefined);
        let score2 = new ComposedScore(0, undefined);
        let score3 = new ComposedScore(0, undefined);

        it('Ha de tornar segons el compare que utilitzi', function() {
            expect(score1.compare(score2)).toEqual(1);
            expect(score2.compare(score1)).toEqual(-1);
            expect(score1.compare(score1)).toEqual(1);
            expect(score2.compare(score3)).toEqual(0);
            expect(score1.compare(score3)).toEqual(1);

        });

        let taulell1 = TaulellBuit;
        let taulell2 = TaulellBuit;
        let taulell3 = TaulellBuit.addFitxaEnPosicio(0, 0, new Peo(BLANC, true, false));

        let specScorer = new SpecScorer(taulell1);
        let scorer1 = new Array(new Array(specScorer, 1));
        let composed = new ComposedScorer(new CheckmateScorer(), scorer1);

        it('Ha de tornar un numeric score', function() {
            expect(composed.scoreBoard(taulell1).getNumericScore()).toEqual(101)
            expect(composed.scoreBoard(taulell2).getNumericScore()).toEqual(101)
            expect(composed.scoreBoard(taulell3).getNumericScore()).toEqual(0)

        });
    });

});