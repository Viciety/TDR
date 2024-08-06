class CheckmateScorer{
    
    scoreBoard(taulell, jugador){
        if(ScanCheckmate(taulell, !jugador)){
            return 1;
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

