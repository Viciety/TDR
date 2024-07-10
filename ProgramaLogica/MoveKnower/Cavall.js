class Cavall{
    constructor(color, moved){
        this.preMoves = moved;
        if (color == BLANC){
            this.peça = CAVALL_BLANC
            this.color = BLANC
            this.valor = 3
        }else if (color == NEGRE){
            this.peça = CAVALL_NEGRE
            this.color = NEGRE
            this.valor = -3
        }else{
            throw "Color no vàlid: "+color;
        }
    }

    cloneFitxa(){
        return new Cavall(this.color, true);
    }

    getColor(){
        return this.color
    }

    moves(inicialVerticalCoord, inicialHoritzontalCoord, taulell){
        var Vector1 = new Array(2, -1);
        var Vector2 = new Array(1, -2);
        var Vector3 = new Array(-1, -2);
        var Vector4 = new Array(-2, -1);
        var Vector5 = new Array(-2, 1);
        var Vector6 = new Array(-1, 2);
        var Vector7 = new Array(1, 2);
        var Vector8 = new Array(2, 1);
        let LlistaVectors = new Array(Vector1, Vector2, Vector3, Vector4, Vector5, Vector6, Vector7, Vector8);

        let PossiblesMovimentsCavall = new Array();
        for (let z = 0; z<LlistaVectors.length; z++){
            let finalVerticalCoord = inicialVerticalCoord + LlistaVectors[z][0];
            let finalHoritzontalCoord = inicialHoritzontalCoord + LlistaVectors[z][1];
            if (finalVerticalCoord<0 || finalVerticalCoord>7 || finalHoritzontalCoord<0 || finalHoritzontalCoord>7){
                continue;
            }else {
                let fitxa = taulell.getFitxaEnPosicio(finalVerticalCoord,finalHoritzontalCoord);
                if(fitxa.color != this.color){
                    PossiblesMovimentsCavall.push(taulell.moveFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord));
                }
            } 
        }
        return PossiblesMovimentsCavall
    }
}