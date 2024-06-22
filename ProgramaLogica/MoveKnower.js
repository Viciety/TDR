class Peo{
    constructor(color){
        if (color == BLANC){
            this.peça = PEO_BLANC
            this.color = BLANC
        }else if (color == NEGRE){
            this.peça = PEO_NEGRE
            this.color = NEGRE
        }
    }

    cloneFitxa(){
        return new Peo(this.color);
    }

    getColor(){
        return this.color
    }

    moves(i, j, taulell){
        if (this.color == BLANC){
            let PossiblesMovimentsPeo = new Array()
            if (i != 0){
                if (j != 0){
                    if (taulell.getFitxaEnPosicio(i-1, j-1).peça > REI_BLANC){
                        PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i-1, j-1));
                    }
                }
                if (j != 7){
                    if (taulell.getFitxaEnPosicio(i-1, j+1).peça > REI_BLANC){
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
                    if (taulell.getFitxaEnPosicio(i+1, j-1).peça < PEO_NEGRE && taulell.getFitxaEnPosicio(i+1, j-1) != BUIDA){
                        PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i+1, j-1));
                    }
                }
                if (j != 7){
                    if (taulell.getFitxaEnPosicio(i+1, j+1).peça < PEO_NEGRE && taulell.getFitxaEnPosicio(i+1, j+1) != BUIDA){
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
    constructor(color, peça){
        this.color = color;
        this.peça = peça;
    }
     
    cloneFitxa(){
        return new StupidFitxa(this.color, this.peça)
    }

    getColor(){
        return this.color
    }

    moves(i, j, taulell){
        let PossiblesMoviments = new Array();
        return PossiblesMoviments
    }
}