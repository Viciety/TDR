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
            console.log("al final te score "+score);
            return score;
        }
        let movimentsValids = LlistarMovimentsValids(taulell, torn);

        if(movimentsValids.length == 0){
            let score = this.scorer.scoreBoard(taulell, jugador)+depth;
            console.log("no hi ha moviments i te score "+score);
            return score;
        }else{
            let movTree = movimentsValids.map((mov) => this.movmentTree(depth-1, mov, !torn, jugador));
            console.log("mirant score de tots els fills al depth "+depth+": "+movTree);
            if (torn == jugador){
                console.log("el torn es del que ha de moure");
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
                console.log("el torn es del que NO ha de moure");
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