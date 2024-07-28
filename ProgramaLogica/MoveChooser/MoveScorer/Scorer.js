class CheckmateScorer{

    scoreBoard(taulell, jugador){
        throw "not implemented";
    }

}

class KillOthersScorer{

    scoreBoard(taulell, jugador){
        throw "not implemented";
    }

}

class RandomScorer{

    scoreBoard(taulell, jugador){
        return getRandomInt(0,100)
    }

}
