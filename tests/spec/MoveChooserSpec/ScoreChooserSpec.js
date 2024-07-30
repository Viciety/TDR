class SpecScorer{
    constructor(taulell){
        this.taulell = taulell;
    };

    scoreBoard(taulell, jugador){
        let score = undefined;
        if (this.taulell == taulell){
            score = 101
        }else{
            score = getRandomInt(0,100);
        }
        return score;
    }
}


describe('ScoreChooser', function() {

    describe("Amb l'SpecScorer", function() {

        let taulell1 = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(BLANC, false));
        let taulell2 = new Taulell()
            .addFitxaEnPosicio(4, 4, new Rei(BLANC, false));
        let taulell3 = new Taulell()
            .addFitxaEnPosicio(4, 6, new Rei(BLANC, false));
        let PossiblesMoviments = new Array(taulell1, taulell2, taulell3)
        let num = getRandomInt(0, PossiblesMoviments.length-1)
        let scorer = new SpecScorer(PossiblesMoviments[num]);
        let ScoreChooser = new ScoreMoveChooser(scorer);

        it('Ha de tornar el primer', function() {
            expect(ScoreChooser.chooseMove(PossiblesMoviments, BLANC)).toEqual(PossiblesMoviments[num]);
        });

    });

    describe("Si només hi ha un taulell", function() {

        let taulell1 = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(BLANC, false));
        let PossiblesMoviments = new Array(taulell1)
        let scorer = new SpecScorer(taulell1);
        let ScoreChooser = new ScoreMoveChooser(scorer);

        it('Ha de tornar el primer', function() {
            expect(ScoreChooser.chooseMove(PossiblesMoviments, BLANC)).toEqual(taulell1);
        });

    });
});