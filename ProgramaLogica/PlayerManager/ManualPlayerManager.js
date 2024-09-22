class ManualPlayerManager{
    constructor(crida, jugador){
        this.crida = crida;
        this.jugador = jugador;
        
        
    }

    manageTorn(taulell){
        let localthis = this;
        this.function = function(){
            localthis.getMoviment(taulell)}
        document.getElementById('movmentInput').style.display = 'block'
        document.getElementById('movmentError').style.display = 'none'
        document.getElementById("moveSubmit").addEventListener("click", this.function)
    }

    getMoviment(taulell){

        let inicialVerticalCoord = document.getElementById('verticalInicial').value;
        let inicialHoritzontalCoord = document.getElementById('horitzontalInicial').value;
        let finalVerticalCoord = document.getElementById('verticalFinal').value;
        let finalHoritzontalCoord = document.getElementById('horitzontalFinal').value;



        if (inicialVerticalCoord>7 
            || inicialHoritzontalCoord>7 
            || finalVerticalCoord>7 
            || finalHoritzontalCoord>7 
            || inicialVerticalCoord<0 
            || inicialHoritzontalCoord<0 
            || finalVerticalCoord<0 
            || finalHoritzontalCoord<0
            || inicialVerticalCoord == ""
            || inicialHoritzontalCoord == ""
            || finalVerticalCoord == ""
            || finalHoritzontalCoord == ""
        ){
            document.getElementById('movmentError').innerHTML = "Posició incorrecta, les coordenades han de ser entre 0 i 7" 
            document.getElementById('movmentError').style.display = 'block'
            
        }else if(taulell.getFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord) == BUIDA){
            document.getElementById('movmentError').innerHTML = "Posició inicial sense fitxa"
            document.getElementById('movmentError').style.display = 'block'


        }else if(taulell.getFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord).color != this.jugador){
            document.getElementById('movmentError').innerHTML = "La fitxa no és del teu color"
            document.getElementById('movmentError').style.display = 'block'


        }else{
            let uncheckedMove = taulell.moveFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord)
            if (
                (taulell.getFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord).peça == PEO_BLANC && finalVerticalCoord == 0 ) 
                || (taulell.getFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord).peça == PEO_NEGRE && finalVerticalCoord == 7)
            ){
                let peçaPromotion;
                if (document.getElementById('queenPromotion').checked){
                    peçaPromotion = new Reina(this.jugador, true)
        
                }else if (document.getElementById('rookPromotion').checked){
                    peçaPromotion = new Torre(this.jugador, true)
                    
                }else if (document.getElementById('knightPromotion').checked){
                    peçaPromotion = new Cavall(this.jugador, true)
        
                }else if (document.getElementById('bishopPromotion').checked){
                    peçaPromotion = new Alfil(this.jugador, true)
                }

                uncheckedMove = uncheckedMove.addFitxaEnPosicio(finalVerticalCoord, finalHoritzontalCoord, peçaPromotion)
            }
            let PossiblesMovimentsValids = LlistarMovimentsValids(taulell, this.jugador);
            let ListedMoves = PossiblesMovimentsValids.filter(taulellActual => 
                taulellActual.getFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord) == BUIDA 
                && taulell.getFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord).peça == 
                taulellActual.getFitxaEnPosicio(finalVerticalCoord, finalHoritzontalCoord).peça
            )

            if (ListedMoves.length <= 0){
                document.getElementById('movmentError').style.display = 'block'
                document.getElementById('movmentError').innerHTML = "Moviment invàlid"

            }else if (ListedMoves.length == 2){
                ListedMoves = ListedMoves.filter((taulellActual) => {
                    if (this.jugador){
                        return !taulellActual.getFitxaEnPosicio(7, 4).preMoves
                    }else if (!this.jugador){
                        return !taulellActual.getPosicioFitxa(0, 4).preMoves
                    }
                });
                let seguentTaulell = ListedMoves[0];
                if (seguentTaulell == undefined){
                    throw "Error, Taulell undefined";
                }
                document.getElementById('movmentInput').style.display = 'none'
                this.crida(seguentTaulell);
                document.getElementById("moveSubmit").removeEventListener("click", this.function)

            }else if (ListedMoves.length == 1){
                let seguentTaulell = ListedMoves[0];
                if (seguentTaulell == undefined){
                    throw "Error, Taulell undefined";
                }
                document.getElementById('movmentInput').style.display = 'none'
                this.crida(seguentTaulell);
                document.getElementById("moveSubmit").removeEventListener("click", this.function)
    
            }else{
                throw "Error en l'anàlisi del moviment al Manual Player Manager"
            }
        }        
    }
}