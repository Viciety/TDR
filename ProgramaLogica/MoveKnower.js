class Peo{
    constructor(color, moved){
        this.preMoves = moved;
        if (color == BLANC){
            this.peça = PEO_BLANC
            this.color = BLANC
        }else if (color == NEGRE){
            this.peça = PEO_NEGRE
            this.color = NEGRE
        }else{
            throw "Color no vàlid: "+color;
        }
    }

    cloneFitxa(){
        return new Peo(this.color, true);
    }

    getColor(){
        return this.color
    }

    moves(i, j, taulell){
        if (this.color == BLANC){
            var Vector1 = new Array(-1, 0, false);
            var Vector2 = new Array(-1, -1, true);
            var Vector3 = new Array(-1, 1, true);
            var Vector4 = new Array(-2, 0, false);
        }else if (this.color == NEGRE){
            var Vector1 = new Array(1, 0, false);
            var Vector2 = new Array(1, 1, true);
            var Vector3 = new Array(1, -1, true);
            var Vector4 = new Array(2, 0, false);
        } 
        let LlistaVectors = new Array(Vector1, Vector2, Vector3);
        if (this.preMoves == false){
            LlistaVectors.push(Vector4);
        }
        let PossiblesMovimentsPeo = new Array();
        for (let z = 0; z<LlistaVectors.length; z++){
            let y = i + LlistaVectors[z][0];
            let x = j + LlistaVectors[z][1];
            if (y<0 || y>7 || x<0 || x>7){
                continue;
            }else {
                let fitxa = taulell.getFitxaEnPosicio(y,x);
                if(LlistaVectors[z][2] == false && fitxa == BUIDA){
                    PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, y, x));
                }else if(LlistaVectors[z][2] == true && fitxa.color != this.color && fitxa != BUIDA){
                    PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, y, x));
                }else if (LlistaVectors[z][2] == false && this.preMoves == false && fitxa == BUIDA){
                    PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, y, x));
                }
            } 
        }
        return PossiblesMovimentsPeo
    }
}

class Rei{
    constructor(color, moved){
        this.preMoves = moved;
        if (color == BLANC){
            this.peça = REI_BLANC;
            this.color = BLANC;
        }else if (color == NEGRE){
            this.peça = REI_NEGRE;
            this.color = NEGRE;
        }else{
            throw "Color no vàlid: "+color;
        }
    }

    cloneFitxa(){
        return new Rei(this.color, true);
    }

    getColor(){
        return this.color;
    }

    moves(i, j, taulell){
        let Vector1 = new Array(1, 0);
        let Vector2 = new Array(1, 1);
        let Vector3 = new Array(0, 1);
        let Vector4 = new Array(-1, 1);
        let Vector5 = new Array(-1, 0);
        let Vector6 = new Array(-1, -1);
        let Vector7 = new Array(0, -1);
        let Vector8 = new Array(1, -1);
        let LlistaVectors = new Array(Vector1, Vector2, Vector3, Vector4, Vector5, Vector6, Vector7, Vector8);
        let PossiblesMovimentsRei = new Array();
        for (let z = 0; z<LlistaVectors.length; z++){
            let y = i + LlistaVectors[z][0];
            let x = j + LlistaVectors[z][1];
            if (y<0 || y>7 || x<0 || x>7){
                continue;
            }else {
                let fitxa = taulell.getFitxaEnPosicio(y,x);
                if(fitxa == BUIDA || fitxa.color != this.color){
                    PossiblesMovimentsRei.push(taulell.moveFitxaEnPosicio(i, j, y, x));
                }
            } 
        }
        return PossiblesMovimentsRei;
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
    constructor(color, moved){
        this.preMoves = moved;
        if (color == BLANC){
            this.peça = REI_BLANC
            this.color = BLANC
        }else if (color == NEGRE){
            this.peça = REI_NEGRE
            this.color = NEGRE
        }
    }
    cloneFitxa(){
        return new StupidFitxa(this.color, true)
    }

    getColor(){
        return this.color
    }

}