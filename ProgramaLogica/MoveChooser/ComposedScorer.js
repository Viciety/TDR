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
            this.checkMateScorer.scoreBoard(taulell,jugador).getNumericScore(), 
            function(){
                return scorers.reduce(
                    (actualScore, scorerArray) => 
                    actualScore + scorerArray[0].scoreBoard(taulell,jugador).getNumericScore()*scorerArray[1], 
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
        let checkmateScoreDif = this.checkmateScore - other.checkmateScore;
        if(checkmateScoreDif == 0){
            console.log("calculant numeric")
            return this.getNumericScore() - other.getNumericScore();
        }else{
            console.log("diferencia checkmate")
            return checkmateScoreDif;
        }
    }
}