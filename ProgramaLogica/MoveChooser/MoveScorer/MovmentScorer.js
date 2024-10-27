class MovmentScorer{
    
    scoreBoard(taulell, jugador){
        return new NumericScore(LlistarMovimentsValids(taulell, jugador).length);
    }

}