class Peo{
    constructor(color, moved, passant){
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
        if (passant == false){
            this.passant = false
        }else{
            this.passant = true
        }
    }

    cloneFitxa(){
        return new Peo(this.color, true);
    }

    getColor(){
        return this.color
    }

    promotion(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord, taulell){
        let PossiblesMovimentsPeo = new Array()
        PossiblesMovimentsPeo.push(taulell
            .addFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, BUIDA)
            .addFitxaEnPosicio(finalVerticalCoord, finalHoritzontalCoord, new Reina(this.color, true)));
        PossiblesMovimentsPeo.push(taulell
            .addFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, BUIDA)
            .addFitxaEnPosicio(finalVerticalCoord, finalHoritzontalCoord, new Torre(this.color, true)));
        PossiblesMovimentsPeo.push(taulell
            .addFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, BUIDA)
            .addFitxaEnPosicio(finalVerticalCoord, finalHoritzontalCoord, new Alfil(this.color, true)));
        PossiblesMovimentsPeo.push(taulell
            .addFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, BUIDA)
            .addFitxaEnPosicio(finalVerticalCoord, finalHoritzontalCoord, new Cavall(this.color, true)));
        return PossiblesMovimentsPeo;
    }

    moves(inicialVerticalCoord, inicialHoritzontalCoord, taulell, nomesMenjant){
        if(nomesMenjant != true) nomesMenjant = false;
        this.passant = false;
        if (this.color == BLANC){
            var Vector1 = new Array(-1, 0, false);
            var Vector2 = new Array(-1, -1, true);
            var Vector3 = new Array(-1, 1, true);
            var Vector4 = new Array(-2, 0, false);
        }else if (this.color == NEGRE){
            var Vector1 = new Array(1, 0, false);
            var Vector2 = new Array(1, -1, true);
            var Vector3 = new Array(1, 1, true);
            var Vector4 = new Array(2, 0, false);
        } 
        let LlistaVectors = new Array(Vector1, Vector2, Vector3);
        if (this.preMoves == false){
            LlistaVectors.push(Vector4);
        }
        if(nomesMenjant == true){
            LlistaVectors = LlistaVectors.filter((m) => m[2] == true);
        }
        let PossiblesMovimentsPeo = new Array();
        for (let z = 0; z<LlistaVectors.length; z++){
            let finalVerticalCoord = inicialVerticalCoord + LlistaVectors[z][0];
            let finalHoritzontalCoord = inicialHoritzontalCoord + LlistaVectors[z][1];
            if (finalVerticalCoord<0 || finalVerticalCoord>7 || finalHoritzontalCoord<0 || finalHoritzontalCoord>7){
                continue;
            }else{
                let fitxa = taulell.getFitxaEnPosicio(finalVerticalCoord,finalHoritzontalCoord);
                if(LlistaVectors[z][2] == false && fitxa == BUIDA){
                    if (finalVerticalCoord == 0 && this.color || finalVerticalCoord == 7 && !this.color){
                        PossiblesMovimentsPeo = PossiblesMovimentsPeo.concat(this.promotion(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord, taulell));
                    }else{
                        PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord));
                    }
                }else if(LlistaVectors[z][2] == true && fitxa.color != this.color && fitxa != BUIDA){
                    if (finalVerticalCoord == 0 && this.color || finalVerticalCoord == 7 && !this.color){
                        PossiblesMovimentsPeo = PossiblesMovimentsPeo.concat(this.promotion(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord, taulell));
                    }else{
                        PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord));
                    }
                }else if (LlistaVectors[z][2] == false && this.preMoves == false && fitxa == BUIDA){
                    let moviment = taulell.moveFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord).addFitxaEnPosicio(finalVerticalCoord, finalHoritzontalCoord, new Peo(this.color, true, true));
                    PossiblesMovimentsPeo.push(moviment)
                }
            } 
        }
        return PossiblesMovimentsPeo
    }
}