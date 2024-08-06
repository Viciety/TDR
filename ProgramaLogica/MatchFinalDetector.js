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
    let peces = taulell.getAllFitxaEnPosicio();
    if (peces.some((fitxa) => 
        fitxa[0].peça == PEO_BLANC 
        || fitxa[0].peça == PEO_NEGRE 
        || fitxa[0].peça == TORRE_BLANCA 
        || fitxa[0].peça == TORRE_NEGRA 
        || fitxa[0].peça == REINA_BLANCA
        || fitxa[0].peça == REINA_NEGRA 
    ) || peces.length>5){
        return false;
    }else if (peces.length == 4 && peces.filter((fitxa) => 
        fitxa[0].peça != CAVALL_BLANC 
        && fitxa[0].peça != CAVALL_BLANC 
        && fitxa[0].peça != REI_BLANC 
        && fitxa[0].peça != REI_NEGRE
    ).length == 0){
        return true
    }else if(peces.length == 3){
        return true;
    }else{
        return false;
    }
    
}
