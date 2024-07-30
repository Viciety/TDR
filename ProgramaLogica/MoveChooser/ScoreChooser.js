class ScoreMoveChooser{
    constructor(scorer){
        if (scorer == undefined){
            throw "Scorer undefined";
        }else{
            this.scorer = scorer;
        }
    }

    chooseMove(PossiblesMoviments, jugador){
        if (PossiblesMoviments.lenght <= 0){
            throw "Cap possible moviment";
        }
        let movimentsPuntuats = PossiblesMoviments.map((mov) => new Array (mov, this.scorer.scoreBoard(mov, jugador)));
        let millors = movimentsPuntuats.slice(1).reduce(
            (millorFinsAra, actual) => {
                if (millorFinsAra[0][1] == actual[1]){
                    millorFinsAra.push(actual);
                    return millorFinsAra;
                }else if(millorFinsAra[0][1]<actual[1]){
                    return new Array(actual);
                }else{
                    return millorFinsAra;
                }
            },
            new Array (movimentsPuntuats[0]),
        );
        let num1 = millors.length;
        let num = getRandomInt(0, num1-1);
        return millors[num][0];
    }

}
