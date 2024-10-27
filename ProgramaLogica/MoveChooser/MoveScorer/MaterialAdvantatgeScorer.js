class MaterialAdvantatgeScorer{

    scoreBoard(taulell, jugador){
        let score = undefined;
        let MaterialBalance = taulell.getAllFitxaEnPosicio().reduce((balance, fitxaIPosicio) => balance + fitxaIPosicio[0].valor, 0);
        if (jugador == BLANC){
            return new NumericScore(MaterialBalance);
        }else{
            return new NumericScore(-MaterialBalance);
        }
    }

}

/*
class MaterialAdvantatgeScore{
    constructor(advantatge){
        this.advantatge = advantatge;
    }

    compare(other){
        return (this.advantatge - other.advantatge)
    }
}
    */