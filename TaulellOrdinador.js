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
            files [0] = new Array(new StupidFitxa(NEGRE, TORRE_NEGRA), new StupidFitxa(NEGRE, CAVALL_NEGRE), new StupidFitxa(NEGRE, ALFIL_NEGRE), new StupidFitxa(NEGRE, REINA_NEGRA), new Rei(NEGRE), new StupidFitxa(NEGRE, ALFIL_NEGRE), new StupidFitxa(NEGRE, CAVALL_NEGRE), new StupidFitxa(NEGRE, TORRE_NEGRA));
            files [1] = new Array(8).fill(0).map(() => new Peo(NEGRE));
            files [6] = new Array(8).fill(0).map(() => new Peo(BLANC));
            files [7] = new Array(new StupidFitxa(BLANC, TORRE_BLANCA), new StupidFitxa(BLANC, CAVALL_BLANC), new StupidFitxa(BLANC, ALFIL_BLANC), new StupidFitxa(BLANC, REINA_BLANCA), new Rei(BLANC), new StupidFitxa(BLANC, ALFIL_BLANC), new StupidFitxa(BLANC, CAVALL_BLANC), new StupidFitxa(BLANC, TORRE_BLANCA));
            
            this.array = files;
        }else if(inicial instanceof Array){
            this.array = inicial;
        }
    }

    cloneArray(array){
        let nouArray = new Array(8);
        for (let i = 0; i<array.length; i++){
            let novaFila = new Array(8);
            for (let j = 0; j<array[i].length; j++){
                if (array[i][j] != BUIDA){
                    novaFila[j] = array[i][j].cloneFitxa();
                }else{
                    novaFila[j] = (BUIDA);
                }
            }
            nouArray[i] = novaFila;
        }
        return nouArray;
    }

    getFitxaEnPosicio(i, j){
        if (i>7 || i<0 || j>7 || j<0){
            throw "Posició "+i+", "+j+" invàlida"
        }
        return this.array[i][j];
    }

    getPosicioFitxa(taulell, fitxa){
        let posicio = new Array();
        for (let i = 0; i<taulell.length; i++){
            for (let j = 0; j<taulell[i].length; j++){
                if (taulell[i][j] == fitxa){
                    posicio.push(i, j);
                }
            }
        }
        return posicio
    }

    addFitxaEnPosicio(i, j, fitxa){
        if(fitxa.peça > 12 || fitxa.peça < 0){
            throw "Fitxa a posar a "+i+ ", "+j+" no és vàlida: "+fitxa.peça
        }else if (i>7 || i<0 || j>7 || j<0){
            throw "Posició "+i+", "+j+" invàlida" 
        }
        let nouArray = this.cloneArray(this.array); 
        nouArray[i][j] = fitxa;
        return new Taulell(nouArray);
    }

    moveFitxaEnPosicio(i, j, x, y){
        if(i>7 || i<0 || j>7 || j<0){
            throw "Posició inicial "+i+", "+j+" invàlida"
        }else if (x>7 || x<0 || y>7 || y<0){
            throw "Posició final "+x+", "+y+" invàlida"
        }else if (this.array[i][j]==BUIDA){
            throw "Casella buida"
        }
        let nouArray = this.cloneArray(this.array);
        nouArray [x][y] = nouArray [i][j].cloneFitxa();
        nouArray[i][j] = BUIDA;
        return new Taulell(nouArray);
    }

    getAllFitxaEnPosicio(){
        let pecesiPosicio = new Array();
        for (let i = 0; i<this.array.length; i++){
            for (let j = 0; j<this.array[i].length; j++){
                if (this.array[i][j] != BUIDA){
                    let PeçaiPosicio = new Array (this.array[i][j], i, j);
                    pecesiPosicio.push(PeçaiPosicio);
                }
            }
        }
        return pecesiPosicio
    }

    
}