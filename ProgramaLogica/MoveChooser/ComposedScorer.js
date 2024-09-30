class ComposedScorer{
    constructor(checkMateScorer, scorers){
        if (!Array.isArray(scorers)){
            throw "Input must be an array: "+scorers;
        }else{
            this.scorers = scorers;
            this.checkMateScorer = checkMateScorer;
        }
    }

    scoreBoard(taulell, jugador){
        let scorers = this.scorers;
        return new ComposedScore(
            this.checkMateScorer.scoreBoard(taulell,jugador), 
            function(){
                return scorers.reduce(
                    (actualScore, scorerArray) => 
                    actualScore + scorerArray[0].scoreBoard(taulell,jugador)*scorerArray[1], 
                    0
                )
            }
        );
    }
}

class ComposedScore{
    constructor(checkmateScore, numericScoreCalculator){
        this.numericScoreCalculator = numericScoreCalculator;
        this.checkmateScore = checkmateScore;
        this.numericScore = undefined;
    }

    getNumericScore(){
        if(this.numericScore == undefined){
            this.numericScore = this.numericScoreCalculator();
        }
        return this.numericScore;
    }

    compare(other){
        if(this.checkmateScore == 1){
            return 1;
        }else{
            return this.checkmateScore - other.checkmateScore;
        }
    }
}