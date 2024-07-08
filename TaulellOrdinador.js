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
            files [0] = new Array(new StupidFitxa(NEGRE, TORRE_NEGRA), new StupidFitxa(NEGRE, CAVALL_NEGRE), new StupidFitxa(NEGRE, ALFIL_NEGRE), new StupidFitxa(NEGRE, REINA_NEGRA), new Rei(NEGRE, false), new StupidFitxa(NEGRE, ALFIL_NEGRE), new StupidFitxa(NEGRE, CAVALL_NEGRE), new StupidFitxa(NEGRE, TORRE_NEGRA));
            files [1] = new Array(8).fill(0).map(() => new Peo(NEGRE, false));
            files [6] = new Array(8).fill(0).map(() => new Peo(BLANC, false));
            files [7] = new Array(new StupidFitxa(BLANC, TORRE_BLANCA), new StupidFitxa(BLANC, CAVALL_BLANC), new StupidFitxa(BLANC, ALFIL_BLANC), new StupidFitxa(BLANC, REINA_BLANCA), new Rei(BLANC, false), new StupidFitxa(BLANC, ALFIL_BLANC), new StupidFitxa(BLANC, CAVALL_BLANC), new StupidFitxa(BLANC, TORRE_BLANCA));
            
            this.array = files;
        }else if(inicial instanceof Array){
            this.array = inicial;
        }
    }

    getFitxaEnPosicio(i, j){
        if (i>7 || i<0 || j>7 || j<0){
            throw "Posició "+i+", "+j+" invàlida"
        }
        return this.array[i][j];
    }

    getPosicioFitxa(fitxa){
        let posicio = new Array();
        for (let i = 0; i<this.array.length; i++){
            for (let j = 0; j<this.array[i].length; j++){
                if (this.array[i][j].peça == fitxa){
                    posicio.push(i, j);
                }
            }
        }
        return posicio
    }

    /* Retorna un nou taullel on una fitxa s'ha afegit a una posicio */
    /* FALTA OPTIMITZAR PER A AFEGIR MULTIPLES PECES*/
    addFitxaEnPosicio(i, j, fitxa){
        if(fitxa.peça > 12 || fitxa.peça < 0){
            throw "Fitxa a posar a "+i+ ", "+j+" no és vàlida: "+fitxa.peça
        }else if (i>7 || i<0 || j>7 || j<0){
            throw "Posició "+i+", "+j+" invàlida" 
        }
        let nouArray = new Array(8);
        for (let i = 0; i<this.array.length; i++){
            let novaFila = new Array(8);
            for (let j = 0; j<this.array[i].length; j++){
                if (this.array[i][j] != BUIDA){
                    novaFila[j] = this.array[i][j];
                }else{
                    novaFila[j] = (BUIDA);
                }   
            }
            nouArray[i] = novaFila;
        }
        nouArray[i][j] = fitxa;
        return new Taulell(nouArray);
    }

    /* Retorna un nou taullel on una fitxa esta moguda a una nova posicio */
    moveFitxaEnPosicio(i, j, x, y){
        if(i>7 || i<0 || j>7 || j<0){
            throw "Posició inicial "+i+", "+j+" invàlida"
        }else if (x>7 || x<0 || y>7 || y<0){
            throw "Posició final "+x+", "+y+" invàlida"
        }else if (this.array[i][j]==BUIDA){
            throw "Casella buida"
        }
        return this.addFitxaEnPosicio(x, y, this.getFitxaEnPosicio(i,j).cloneFitxa()).addFitxaEnPosicio(i, j, BUIDA);
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