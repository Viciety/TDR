class DeepScorer{
    constructor(depth, scorer){
        if (depth === parseInt(depth, 10) && depth>=1){
            this.depth = depth;
        }else{
            throw "Invalid depth: "+depth;
        }
        this.scorer = scorer;
        this.taulellsRevisats = 0;
        this.iteracions = 0;
        this.temps = Date.now();
    }

    scoreBoard(taulell, jugador){
        this.taulellsRevisats = this.taulellsRevisats+1;
        console.log("Taulells Revisats: "+this.taulellsRevisats+"////////////////////////////////////////////////////////////////////////////////////////////////////////");
        return this.movmentTree(this.depth, taulell, !jugador, jugador);
    }
    
    movmentTree(depth, taulell, torn, jugador){
        console.log("Temps: "+(Date.now()-this.temps)/1000);
        this.iteracions = this.iteracions+1;
        console.log("Iteracions: "+this.iteracions);
        if (depth<=0){
            let score = this.scorer.scoreBoard(taulell, jugador);
            return new DeepScore(score, 0);
        }
        let movimentsValids = LlistarMovimentsValids(taulell, torn);

        if(movimentsValids.length == 0 || ScanInsufficientMaterial(taulell)  || ScanStalemate(taulell, torn)){
            return new DeepScore(this.scorer.scoreBoard(taulell, jugador), depth);

        }else{
            let movTree = movimentsValids.map((mov) => this.movmentTree(depth-1, mov, !torn, jugador));
            if (torn == jugador){
                return movTree.slice(1).reduce(
                    (accumulador, actual) => {
                        let result = accumulador.compare(actual);
                        if (result > 0) return accumulador;
                        else return actual;
                    },
                    movTree[0],
                );
            }else{
                return movTree.slice(1).reduce(
                    (accumulador, actual) => {
                        let result = accumulador.compare(actual);
                        if (result > 0) return accumulador;
                        else return actual;
                    },
                    movTree[0],
                );
            }
            
        }
    }
}

class DeepScore{
    constructor(score, depth){
        this.score = score;
        this.depth = depth
    }

    compare(other){
        let scoreDiff = this.score.compare(other.score);
        if (scoreDiff == 0){
            return this.depth - other.depth;
        }else{
            return scoreDiff;
        }
    }
}