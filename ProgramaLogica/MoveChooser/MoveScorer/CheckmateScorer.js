class CheckmateScorer{
    
    scoreBoard(taulell, jugador){
        if(ScanCheckmate(taulell, !jugador)){
            return new NumericScore(1);
        }else{
            return new NumericScore(0);
        }
    }

}

/*
class CheckmateScore{
    constructor(isCheckmate){
        this.isCheckmate = isCheckmate;
    }

    compare(other){
        if (other.isCheckmate){
            if (this.isCheckmate){
                return 0;
            }else{
                return -1;
            }
        }else{
            if (this.isCheckmate){
                return 1;
            }else{
                return 0;
            }
        }
    }
}
    */


