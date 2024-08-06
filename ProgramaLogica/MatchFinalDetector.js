function ScanCheckmate(taulell, jugador){
    let checkmate = false
    let MovimentsTotals = LlistarMoviments(taulell, jugador);
    let MovimentsValids = new Array();
    if (ScanCheck(taulell, jugador) == true){
        for (let inicialVerticalCoord  = 0; inicialVerticalCoord <MovimentsTotals.length; inicialVerticalCoord++){
            if (ScanCheck(MovimentsTotals[inicialVerticalCoord], jugador) == true){
                continue;
            }else{
                MovimentsValids.push(MovimentsTotals[inicialVerticalCoord]);
            }
        }
        if (MovimentsValids.length == 0){
            checkmate = true
        }
    }
    return checkmate
}

function ScanCheck(taulell, jugador){
    let Rei = REI_NEGRE
    let ReiRival = REI_BLANC
    if (jugador == BLANC){
        Rei = REI_BLANC
        ReiRival = REI_NEGRE
    }
    let posicioRei = taulell.getPosicioFitxa(Rei);
    if (posicioRei.length != 2){
        throw "No hi ha rei"
    }
    let check = false;
    let MovimentsTotals = LlistarMoviments(taulell, !jugador, true);
    for (let inicialVerticalCoord = 0; inicialVerticalCoord<MovimentsTotals.length; inicialVerticalCoord++){
        if (MovimentsTotals[inicialVerticalCoord].getFitxaEnPosicio(posicioRei[0], posicioRei[1]).peça != Rei && MovimentsTotals[inicialVerticalCoord].getFitxaEnPosicio(posicioRei[0], posicioRei[1]).peça != BUIDA){
            check = true;
        }
    }
    return check
}

function ScanStalemate(taulell, jugador){
    let stalemate = false
    let MovimentsTotals = LlistarMoviments(taulell, jugador);
    let MovimentsValids = new Array();
    if (ScanCheck(taulell, jugador) == false){
        for (let inicialVerticalCoord = 0; inicialVerticalCoord<MovimentsTotals.length; inicialVerticalCoord++){
            if (ScanCheck(MovimentsTotals[inicialVerticalCoord], jugador) == true){
                continue;
            }else{
                MovimentsValids.push(MovimentsTotals[inicialVerticalCoord]);
            }
        }
        if (MovimentsValids.length == 0){
            stalemate = true
        }
    }
    return stalemate
}

function ScanInsufficientMaterial(taulell){
    let insufficientMaterial = false;
    let peces = taulell.getAllFitxaEnPosicio();
    return insufficientMaterial
}
