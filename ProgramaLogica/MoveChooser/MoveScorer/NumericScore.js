class NumericScore{
    constructor(score){
        this.score = score;
    }

    getNumericScore(){
        return this.score;
    }

    compare(other){
        return this.score - other.score;
    }

}