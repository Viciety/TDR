class Peo{
    constructor(color, moved){
        this.preMoves = moved;
        if (color == BLANC){
            this.peça = PEO_BLANC
            this.color = BLANC
            this.valor = 1
        }else if (color == NEGRE){
            this.peça = PEO_NEGRE
            this.color = NEGRE
            this.valor = -1
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