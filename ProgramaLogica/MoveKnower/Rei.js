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