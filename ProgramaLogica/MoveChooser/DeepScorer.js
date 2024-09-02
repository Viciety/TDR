class DeepScorer{
    constructor(depth, scorer){
        if (depth === parseInt(depth, 10) && depth>=1){
            this.depth = depth;
        }else{
            throw "Invalid depth: "+depth;
        }
        this.scorer = scorer;
    }

    scoreBoard(taulell, jugador){
        return this.movmentTree(this.depth, taulell, !jugador, jugador);
    }
    
    movmentTree(depth, taulell, torn, jugador){
        if (depth<=0){
            let score = this.scorer.scoreBoard(taulell, jugador);
            return score;
        }
        let movimentsValids = LlistarMovimentsValids(taulell, torn);

        if(movimentsValids.length == 0){
            let score = this.scorer.scoreBoard(taulell, jugador)+depth;
            return score;
        }else{
            let movTree = movimentsValids.map((mov) => this.movmentTree(depth-1, mov, !torn, jugador));
            if (torn == jugador){
                return movTree.slice(1).reduce(
                    (accumulador, actual) => {
                        if (accumulador<actual){
                            return actual;
                        }else{
                            return accumulador;
                        }
                    },
                    movTree[0],
                );
            }else{
                return movTree.slice(1).reduce(
                    (accumulador, actual) => {
                        if (accumulador>actual){
                            return actual;
                        }else{
                            return accumulador;
                        }
                    },
                    movTree[0],
                );
            }
            
        }
    }
}