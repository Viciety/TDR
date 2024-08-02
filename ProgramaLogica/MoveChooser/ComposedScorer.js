class ComposedScorer{
    constructor(scorers){
        if (scorers.length == undefined){
            throw "Input must be an array: "+scorers;
        }else{
            this.scorers = scorers;
        }
    }

    composeScorers(taulell, jugador){
        let overallScore = 0;
        for (let z = 0; z<this.scorers.length; z++){
            overallScore = overallScore + this.scorers[z][0].scoreBoard(taulell, jugador)*this.scorers[z][1];
        }
        return overallScore;
    }
}