class SpecScorer{
    constructor(taulell){
        this.taulell = taulell;
    };

    scoreBoard(taulell, jugador){
        let score = undefined;
        if (this.taulell == taulell){
            score = 101
        }else{
            score = 0;
        }
        return score;
    }
}
