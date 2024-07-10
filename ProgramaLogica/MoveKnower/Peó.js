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

    moves(inicialVerticalCoord, inicialHoritzontalCoord, taulell){
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
            let finalVerticalCoord = inicialVerticalCoord + LlistaVectors[z][0];
            let finalHoritzontalCoord = inicialHoritzontalCoord + LlistaVectors[z][1];
            if (finalVerticalCoord<0 || finalVerticalCoord>7 || finalHoritzontalCoord<0 || finalHoritzontalCoord>7){
                continue;
            }else {
                let fitxa = taulell.getFitxaEnPosicio(finalVerticalCoord,finalHoritzontalCoord);
                if(LlistaVectors[z][2] == false && fitxa == BUIDA){
                    PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord));
                }else if(LlistaVectors[z][2] == true && fitxa.color != this.color && fitxa != BUIDA){
                    PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord));
                }else if (LlistaVectors[z][2] == false && this.preMoves == false && fitxa == BUIDA){
                    PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord));
                }
            } 
        }
        return PossiblesMovimentsPeo
    }
}