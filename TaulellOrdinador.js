const BUIDA = 0;
/**PECES */
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

class Taulell{
    constructor(inicial){
        let fila = Array.from(Array(8).fill(BUIDA));
        let files = Array.from(Array(8).fill(fila))
        if(inicial === undefined){
            this.array = files;
        }else if (typeof(inicial) == 'boolean'){  // quan haguem de carregar taulell a mitja partida, afegir else if 
            files [0] = new Array(TORRE_NEGRA,CAVALL_NEGRE,ALFIL_NEGRE,REINA_NEGRA,REI_NEGRE,ALFIL_NEGRE,CAVALL_NEGRE,TORRE_NEGRA);
            files [1] = new Array(8).fill(PEO_NEGRE);
            files [6] = new Array(8).fill(PEO_BLANC);
            files [7] = new Array(TORRE_BLANCA,CAVALL_BLANC,ALFIL_BLANC,REINA_BLANCA,REI_BLANC,ALFIL_BLANC,CAVALL_BLANC,TORRE_BLANCA);
            
            this.array = files;
        }else if(inicial instanceof Array){
            this.array = inicial;
        }
        console.log(this.array)
    }

    getFitxaEnPosicio(i, j){
        if (i>7 || i<0 || j>7 || j<0){
            throw "Posició "+i+", "+j+" invàlida"
        }
        return this.array[i][j];
    }

    addFitxaEnPosicio(i, j, fitxa){
        if(fitxa > 12 || fitxa < 0){
            throw "Fitxa a posar a "+i+ ", "+j+" no és vàlida: "+fitxa
        }else if (i>7 || i<0 || j>7 || j<0){
            throw "Posició "+i+", "+j+" invàlida" 
        }
        let nouArray = JSON.parse(JSON.stringify(this.array)); 
        nouArray[i][j] = fitxa;
        return new Taulell(nouArray);
    }

    moveFitxaEnPosicio(i, j, x, y){
        if(i>7 || i<0 || j>7 || j<0){
            throw "Posició inicial "+i+", "+j+" invàlida"
        }else if (x>7 || x<0 || y>7 || y<0){
            throw "Posició final "+x+", "+y+" invàlida"
        }else if (this.array==0){
            throw "Casella buida"
        }
        let nouArray = JSON.parse(JSON.stringify(this.array));
        nouArray [x][y] = nouArray [i][j];
        nouArray[i][j] = 0;
        return new Taulell(nouArray);
    }

    getAllFitxaEnPosicio(){
        let PecesiPosicio = new Array();
        for (let i = 0; i<=Taulell.length; i++){
            for (let j = 0; i<=Taulell[i].length; j++){
                let PeçaiPosicio = Taulell[i][j], i, j;
                PecesiPosicio.push(PeçaiPosicio);
            }
        }
        return PecesiPosicio
    }

}