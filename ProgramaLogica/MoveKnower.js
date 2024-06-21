class Peo{
    constructor(jugador){
        if (jugador == BLANC){
            this.peça = PEO_BLANC
            this.color = BLANC
        }else{
            this.peça = PEO_NEGRE
            this.color = NEGRE
        }
    }

    getColor(){
        return this.color
    }
    moves(i, j, taulell){
        if (this.color == BLANC){
            let PossiblesMovimentsPeo = new Array()
            if (i != 0){
                if (j != 0){
                    if (taulell.getFitxaEnPosicio(i-1, j-1) > REI_BLANC){
                        PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i-1, j-1));
                    }
                }
                if (j != 7){
                    if (taulell.getFitxaEnPosicio(i-1, j+1) > REI_BLANC){
                        PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i-1, j+1));
                    }
                }
                if (taulell.getFitxaEnPosicio(i-1, j) == BUIDA){
                    PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i-1, j));
                }
            }
            return PossiblesMovimentsPeo
        }else if (this.color == NEGRE){
            let PossiblesMovimentsPeo = new Array()
            if (i != 7){
                if (j != 0){
                    if (taulell.getFitxaEnPosicio(i+1, j-1) < PEO_NEGRE && taulell.getFitxaEnPosicio(i+1, j-1) != BUIDA){
                        PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i+1, j-1));
                    }
                }
                if (j != 7){
                    if (taulell.getFitxaEnPosicio(i+1, j+1) < PEO_NEGRE && taulell.getFitxaEnPosicio(i+1, j+1) != BUIDA){
                        PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i+1, j+1));
                    }
                }
                if (taulell.getFitxaEnPosicio(i+1, j) == BUIDA){
                    PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i+1, j));
                }
            }
            return PossiblesMovimentsPeo
        }
    }
}
class StupidFitxa{
    constructor(jugador, type){
        this.color = jugador;
        this.peça = type;
    }

    getColor(){
        return this.color
    }

    moves(i, j, taulell){
        let PossiblesMoviments = new Array();
        return PossiblesMoviments
    }
}