function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

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
        return new NumericScore(score);
    }
}


