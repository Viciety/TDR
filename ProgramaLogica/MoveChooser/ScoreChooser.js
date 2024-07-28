class ScoreMoveChooser{
    constructor(scorer){
        this.scorer = scorer;
    }

    chooseMove(PossiblesMoviments, jugador){
        if (PossiblesMoviments.lenght <= 0){
            throw "Cap possible moviment";
        }
        let movimentsPuntuats = PossiblesMoviments.map((mov) => new Array (mov, this.scorer.scoreBoard(mov, jugador)));
        let millor = movimentsPuntuats.reduce(
            (millorFinsAra, actual) => {if(millorFinsAra[1]<actual){return actual;}else{return millorFinsAra;}},
            movimentsPuntuats[0],
        );
        return millor[0];
    }

}
