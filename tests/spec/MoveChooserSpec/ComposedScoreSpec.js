describe('Comparartoria Scores composed', function() {

    describe("Amb dos ComposedScores", function() {

        let score1 = new ComposedScore(1, function(){return 5});
        let score2 = new ComposedScore(0, function(){return 10});
        let score3 = new ComposedScore(0, function(){return 5});
        let score4 = new ComposedScore(1, function(){return 10});


        it('Score de 1 i 5', function() {
            expect(score1.compare(score1)).toEqual(0);
            expect(score1.compare(score2)).toEqual(1);
            expect(score1.compare(score3)).toEqual(1);
            expect(score1.compare(score4)).toEqual(-5);
        });

        it('Score 0 i 10', function(){
            expect(score2.compare(score1)).toEqual(-1);
            expect(score2.compare(score2)).toEqual(0);
            expect(score2.compare(score3)).toEqual(5);
            expect(score2.compare(score4)).toEqual(-1);
        });

        it('Score 0 i 5', function(){
            expect(score3.compare(score1)).toEqual(-1);
            expect(score3.compare(score2)).toEqual(-5);
            expect(score3.compare(score3)).toEqual(0);
            expect(score3.compare(score4)).toEqual(-1);
        });

        it('Score 1 i 10', function(){
            expect(score4.compare(score1)).toEqual(5);
            expect(score4.compare(score2)).toEqual(1);
            expect(score4.compare(score3)).toEqual(1);
            expect(score4.compare(score4)).toEqual(0);
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