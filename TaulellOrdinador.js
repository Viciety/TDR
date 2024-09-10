const BUIDA = 0;
/* PECES */
const PEO_BLANC = 1;
const TORRE_BLANCA = 2;
const CAVALL_BLANC = 3;
const ALFIL_BLANC = 4;
const REINA_BLANCA = 5;
const REI_BLANC = 6;
const PEO_NEGRE = 7;
const TORRE_NEGRA = 8;
const CAVALL_NEGRE = 9;
const ALFIL_NEGRE = 10;
const REINA_NEGRA = 11;
const REI_NEGRE = 12;

/* JUGADORS */
BLANC = true
NEGRE = false

class Taulell{
    constructor(inicial){
        function novaFila(){return Array(8).fill(0).map(() => BUIDA);}
        let files = Array(8).fill(0).map(() => novaFila());
        if(inicial === undefined){
            this.array = files;
        }else if (typeof(inicial) == 'boolean'){ 
            files [0] = new Array(new Torre(NEGRE, false), new Cavall(NEGRE, false), new Alfil(NEGRE, false), new Reina(NEGRE, false), new Rei(NEGRE, false), new Alfil(NEGRE, false), new Cavall(NEGRE, false), new Torre(NEGRE, false));
            files [1] = new Array(8).fill(0).map(() => new Peo(NEGRE, false, false));
            files [6] = new Array(8).fill(0).map(() => new Peo(BLANC, false, false));
            files [7] = new Array(new Torre(BLANC, false), new Cavall(BLANC, false), new Alfil(BLANC, false), new Reina(BLANC, false), new Rei(BLANC, false), new Alfil(BLANC, false), new Cavall(BLANC, false), new Torre(BLANC, false));
            
            this.array = files;
        }else if(inicial instanceof Array){
            this.array = inicial;
        }
    }

    getFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord){
        if (inicialVerticalCoord>7 ||inicialVerticalCoord <0 || inicialHoritzontalCoord>7 || inicialHoritzontalCoord<0){
            throw "Posició "+i+", "+inicialHoritzontalCoord+" invàlida"
        }
        return this.array[inicialVerticalCoord][inicialHoritzontalCoord];
    }

    getPosicioFitxa(fitxa){
        let posicio = new Array();
        for (let inicialVerticalCoord = 0;inicialVerticalCoord <this.array.length; inicialVerticalCoord ++){
            for (let inicialHoritzontalCoord = 0; inicialHoritzontalCoord<this.array[inicialVerticalCoord].length; inicialHoritzontalCoord++){
                if (this.array[inicialVerticalCoord][inicialHoritzontalCoord].peça == fitxa){
                    posicio.push(inicialVerticalCoord, inicialHoritzontalCoord);
                }
            }
        }
        return posicio
    }

    /* Retorna un nou taullel on una fitxa s'ha afegit a una posicio */
    /* FALTA OPTIMITZAR PER A AFEGIR MULTIPLES PECES*/
    addFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, fitxa){
        if(fitxa.peça > 12 || fitxa.peça < 0){
            throw "Fitxa a posar a "+inicialVerticalCoord + ", "+inicialHoritzontalCoord+" no és vàlida: "+fitxa.peça
        }else if (inicialVerticalCoord>7 || inicialVerticalCoord <0 || inicialHoritzontalCoord>7 || inicialHoritzontalCoord<0){
            throw "Posició "+i+", "+inicialHoritzontalCoord+" invàlida" 
        }
        let nouArray = new Array(8);
        for (let inicialVerticalCoord = 0; inicialVerticalCoord <this.array.length; inicialVerticalCoord ++){
            let novaFila = new Array(8);
            for (let inicialHoritzontalCoord = 0; inicialHoritzontalCoord<this.array[inicialVerticalCoord].length; inicialHoritzontalCoord++){
                if (this.array[inicialVerticalCoord][inicialHoritzontalCoord] != BUIDA){
                    novaFila[inicialHoritzontalCoord] = this.array[inicialVerticalCoord][inicialHoritzontalCoord];
                }else{
                    novaFila[inicialHoritzontalCoord] = (BUIDA);
                }   
            }
            nouArray[inicialVerticalCoord] = novaFila;
        }
        nouArray[inicialVerticalCoord][inicialHoritzontalCoord] = fitxa;
        return new Taulell(nouArray);
    }

    /* Retorna un nou taullel on una fitxa esta moguda a una nova posicio */
    moveFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, finalVerticalCoord, finalHoritzontalCoord){
        if(inicialVerticalCoord>7 || inicialVerticalCoord <0 || inicialHoritzontalCoord>7 || inicialHoritzontalCoord<0){
            throw "Posició inicial "+inicialVerticalCoord+", "+inicialHoritzontalCoord+" invàlida"
        }else if (finalHoritzontalCoord>7 || finalHoritzontalCoord<0 || finalVerticalCoord>7 || finalVerticalCoord<0){
            throw "Posició final "+finalHoritzontalCoord+", "+finalVerticalCoord+" invàlida"
        }else if (this.array[inicialVerticalCoord][inicialHoritzontalCoord]==BUIDA){
            throw "Casella buida"
        }
        let taulellMogut = this.addFitxaEnPosicio(finalVerticalCoord, finalHoritzontalCoord, this.getFitxaEnPosicio(inicialVerticalCoord,inicialHoritzontalCoord).cloneFitxa()).addFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord, BUIDA);
        return taulellMogut
    }

    getAllFitxaEnPosicio(){
        let pecesiPosicio = new Array();
        for (let inicialVerticalCoord = 0;inicialVerticalCoord <this.array.length;inicialVerticalCoord ++){
            for (let inicialHoritzontalCoord = 0; inicialHoritzontalCoord<this.array[inicialVerticalCoord].length; inicialHoritzontalCoord++){
                if (this.array[inicialVerticalCoord][inicialHoritzontalCoord] != BUIDA){
                    let PeçaiPosicio = new Array (this.array[inicialVerticalCoord][inicialHoritzontalCoord], inicialVerticalCoord, inicialHoritzontalCoord);
                    pecesiPosicio.push(PeçaiPosicio);
                }
            }
        }
        return pecesiPosicio
    }

    equalTaulell(taulell){
        let a = this.array;
        let b = taulell.array;
        return Array.isArray(a) && 
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val.peça === b[index].peça);
    }
    
}