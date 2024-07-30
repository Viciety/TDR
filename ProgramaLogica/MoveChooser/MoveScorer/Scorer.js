class CheckmateScorer{
    constructor(checkmateScore){
        this.checkmateScore = checkmateScore;
    }

    scoreBoard(taulell, jugador){
        let checkmateScore = this.checkmateScore
        if(ScanCheck(taulell, !jugador)){
            return checkmateScore;
        }else{
            return 0;
        }
    }

}

class MaterialAdvantatgeScorer{

    scoreBoard(taulell, jugador){
        let score = undefined;
        let MaterialBalance = taulell.getAllFitxaEnPosicio().reduce((balance, fitxaIPosicio) => balance + fitxaIPosicio[0].valor, 0);
        if (jugador == BLANC){
            score = MaterialBalance;
        }else{
            score = -MaterialBalance;
        }
        return score;
    }

}

class RandomScorer{

    scoreBoard(taulell, jugador){
        return getRandomInt(0,100)
    }

}
