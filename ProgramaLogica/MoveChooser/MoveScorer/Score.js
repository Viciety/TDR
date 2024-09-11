class Score{
    constructor(avantatge, checkmate, depth){
        this.avantatge = avantatge;
        this.checkmate = checkmate;
        this.depth = depth;
    }

    compareScores(score){
        if (this.checkmate){
            if (score.checkmate){
                return new Array (this, score);
            }else {
                return new Array (this)
            }
        }else{
            if (score.checkmate){
                return new Array (score);
            }else{
                if (score.avantatge < this.avantatge){
                    return this

                }else if (score.avantatge > this.avantatge){
                    return new Array (score);

                }else if (score.avantatge == this.avantatge){
                    if (score.depth < this.depth){
                        return this
    
                    }else if (score.depth > this.depth){
                        return new Array (score);
    
                    }else if (score.depth == this.depth){
                        return new Array (this, score);
    
                    }
                }
            }
        }
    }
}