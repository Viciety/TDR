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
        ){
            document.getElementById('movmentError').innerHTML = "Posició fora del Taulell, les coordenades han de ser entre 0 i 7" 
            document.getElementById('movmentError').style.display = 'block'
        }else if(taulell.getFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord) == BUIDA){
            document.getElementById('movmentError').innerHTML = "Posició inicial sense fitxa"
            document.getElementById('movmentError').style.display = 'block'


        }else if(taulell.getFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord).color != this.jugador){
            document.getElementById('movmentError').innerHTML = "La fitxa no és del teu color"
            document.getElementById('movmentError').style.display = 'block'


        }else{
            let uncheckedMove = taulell.moveFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord)
            let PossiblesMovimentsValids = LlistarMovimentsValids(taulell, this.jugador);
            
            if (!PossiblesMovimentsValids.some(taulellActual => taulellActual.equalTaulell(uncheckedMove))){
                document.getElementById('movmentError').style.display = 'block'
                document.getElementById('movmentError').innerHTML = "Moviment invàlid"

            }else{
                let seguentTaulell = uncheckedMove;
                if (seguentTaulell == undefined){
                    throw "Error, Taulell undefined";
                }
                document.getElementById('movmentInput').style.display = 'none'
                this.crida(seguentTaulell);
                document.getElementById("moveSubmit").removeEventListener("click", this.function)
    
            }
        }        
    }
}