describe('Deep Score', function() {

    describe("El Deep Score", function() {

        let score1 = new DeepScore(new NumericScore(5), 1);
        let score2 = new DeepScore(new NumericScore(5), 2);
        let score3 = new DeepScore(new NumericScore(15), 2);
        let score4 = new DeepScore(new NumericScore(10), 3);

        it('Deep Score 5 i 1', function() {
            expect(score1.compare(score1)).toEqual(0);
            expect(score1.compare(score2)).toEqual(-1);
            expect(score1.compare(score3)).toEqual(-10);
            expect(score1.compare(score4)).toEqual(-5);
        });

        it('Deep Score 5 i 2', function() {
            expect(score2.compare(score1)).toEqual(1);
            expect(score2.compare(score2)).toEqual(0);
            expect(score2.compare(score3)).toEqual(-10);
            expect(score2.compare(score4)).toEqual(-5);
        });

        it('Deep Score 15 i 2', function() {
            expect(score3.compare(score1)).toEqual(10);
            expect(score3.compare(score2)).toEqual(10);
            expect(score3.compare(score3)).toEqual(0);
            expect(score3.compare(score4)).toEqual(5);
        });

        it('Deep Score 10 i 3', function() {
            expect(score4.compare(score1)).toEqual(5);
            expect(score4.compare(score2)).toEqual(5);
            expect(score4.compare(score3)).toEqual(-5);
            expect(score4.compare(score4)).toEqual(0);
        });

    });    
});

