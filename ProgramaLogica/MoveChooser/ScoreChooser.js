class ScoreMoveChooser{
    constructor(scorer){
        if (scorer == undefined){
            throw "Scorer undefined";
        }else{
            this.scorer = scorer;
        }
    }

    chooseMove(PossiblesMoviments, jugador){
        if (PossiblesMoviments.length <= 0){
            throw "Cap possible moviment";
        }
        let movimentsPuntuats = PossiblesMoviments.map((mov) => new Array (mov, this.scorer.scoreBoard(mov, jugador)));
        let millors = movimentsPuntuats.slice(1).reduce(
            (millorFinsAra, actual) => {
                let a= millorFinsAra[0][1].compare(actual[1]);
                if (a == 0){
                    millorFinsAra.push(actual);
                    return millorFinsAra;
                }else if(millorFinsAra[0][1].compare(actual[1]) < 0){
                    return new Array(actual);
                }else{
                    return millorFinsAra;
                }
            },
            new Array (movimentsPuntuats[0]),
        );
        return millors[getRandomInt(0, millors.length-1)][0];
    }

}
