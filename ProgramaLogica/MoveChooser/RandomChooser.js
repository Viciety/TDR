class RandomMoveChooser{
    constructor(){
        this.elo = 0;
    }

    chooseMove(PossiblesMoviments, jugador){
        let PossiblesMovimentsValids = PossiblesMoviments.filter((possibleTaulell) => !ScanCheck(possibleTaulell, jugador));
        let numero = getRandomInt(0, PossiblesMovimentsValids.length-1)
        let moviment = PossiblesMovimentsValids[numero];
        return moviment
    }

}
