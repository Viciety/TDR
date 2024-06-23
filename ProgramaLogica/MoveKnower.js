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

class Rei{
    constructor(color, peça){
        if (color == BLANC){
            this.peça = REI_BLANC
            this.color = BLANC
        }else if (color == NEGRE){
            this.peça = REI_NEGRE
            this.color = NEGRE
        }
    }

    cloneFitxa(){
        return new Rei(this.color, this.peça)
    }

    getColor(){
        return this.color
    }

    moves(i, j, taulell){
        let Vector1 = new Array(1, 0)
        let Vector2 = new Array(1, 1)
        let Vector3 = new Array(0, 1)
        let Vector4 = new Array(-1, 1)
        let Vector5 = new Array(-1, 0)  
        let Vector6 = new Array(-1, -1)
        let Vector7 = new Array(0, -1)
        let Vector8 = new Array(1, -1)
        let LlistaVectors = new Array()
        let PossiblesMovimentsRei = new Array()
        LlistaVectors.push(Vector1).push(Vector2).push(Vector3).push(Vector4).push(Vector5).push(Vector6).push(Vector7).push(Vector8)
        for (let z = 0; i<LlistaVectors.length; i++){
            let y = i + LlistaVectors[z][0];
            let x = j + LlistaVectors[z][1];
            if (taulell[y][x] == BUIDA){
                PossiblesMovimentsRei.push(taulell.moveFitxaEnPosicio(i, j, y, x));
            } 
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

class Cavall{
    constructor(color, peça){
        if (color == BLANC){
            this.peça = REI_BLANC
            this.color = BLANC
        }else if (color == NEGRE){
            this.peça = REI_NEGRE
            this.color = NEGRE
        }
    }
    cloneFitxa(){
        return new StupidFitxa(this.color, this.peça)
    }

    getColor(){
        return this.color
    }

}