class DeepScorer{
    constructor(depth, scorer){
        if (depth === parseInt(depth, 10) && depth>=1){
            this.depth = depth;
        }else{
            throw "Invalid depth: "+depth;
        }
        this.scorer = scorer;
        this.temps = Date.now();
        this.iteracions = 0;
        this.taulellsRevistats = 0;
    }

    scoreBoard(taulell, jugador){
        this.taulellsRevistats = this.taulellsRevistats+1;
        console.log("Taulells Revisats: "+this.taulellsRevistats+" ///////////////////////////////////////////////////////////////")
        return this.movmentTree(this.depth, taulell, !jugador, jugador);
    }
    
    movmentTree(depth, taulell, torn, jugador){
        this.iteracions = this.iteracions+1;
        console.log("Iteracions: "+this.iteracions);
        console.log("Temps: "+(Date.now()-this.temps))
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