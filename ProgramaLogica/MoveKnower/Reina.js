class Reina{
    constructor(color, moved){
        this.preMoves = moved;
        if (color == BLANC){
            this.peça = REINA_BLANCA
            this.color = BLANC
            this.valor = 9
        }else if (color == NEGRE){
            this.peça = REINA_NEGRA
            this.color = NEGRE
            this.valor = -9
        }else{
            throw "Color no vàlid: "+color;
        }
    }

    cloneFitxa(){
        return new Reina(this.color, true);
    }

    getColor(){
        return this.color
    }

    moves(inicialVerticalCoord, inicialHoritzontalCoord, taulell){
        var Vector1 = new Array(0, 1);
        var Vector2 = new Array(0, -1);
        var Vector3 = new Array(1, 0);
        var Vector4 = new Array(-1, 0);
        var Vector5 = new Array(1, 1);
        var Vector6 = new Array(1, -1);
        var Vector7 = new Array(-1, 1);
        var Vector8 = new Array(-1, -1);

        let LlistaVectors = new Array(Vector1, Vector2, Vector3, Vector4, Vector5, Vector6, Vector7, Vector8);

        let PossiblesMovimentsReina = new Array();
        for (let z = 0; z<LlistaVectors.length; z++){
            let finalVerticalCoord = inicialVerticalCoord;
            let finalHoritzontalCoord = inicialHoritzontalCoord;
            for (let k = 0; k<7; k++){
                finalVerticalCoord = finalVerticalCoord + LlistaVectors[z][0];
                finalHoritzontalCoord = finalHoritzontalCoord + LlistaVectors[z][1];
                if (finalVerticalCoord<0 || finalVerticalCoord>7 || finalHoritzontalCoord<0 || finalHoritzontalCoord>7){
                    break;
                }else {
                    let fitxa = taulell.getFitxaEnPosicio(finalVerticalCoord,finalHoritzontalCoord);
                    if(fitxa.color == this.color){
                        break;
                    }else if (fitxa.color == !this.color){
                        PossiblesMovimentsReina.push(taulell.moveFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord));
                        break;
                    } else {
                        PossiblesMovimentsReina.push(taulell.moveFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord));
                    }
                }
            }
        }
        return PossiblesMovimentsReina
    }
}