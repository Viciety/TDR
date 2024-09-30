class MaterialAdvantatgeScorer{

    scoreBoard(taulell, jugador){
        let score = undefined;
        let MaterialBalance = taulell.getAllFitxaEnPosicio().reduce((balance, fitxaIPosicio) => balance + fitxaIPosicio[0].valor, 0);
        if (jugador == BLANC){
            return MaterialBalance;
        }else{
            return -MaterialBalance;
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