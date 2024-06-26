function ScanCheckmate(taulell, jugador){
    let checkmate = false
    let MovimentsTotals = LlistarMoviments(taulell, jugador);
    let MovimentsValids = new Array();
    if (ScanCheck(taulell, jugador) == true){
        for (let i = 0; i<MovimentsTotals.length; i++){
            if (ScanCheck(MovimentsTotals[i], jugador) == true){
                continue;
            }else{
                MovimentsValids.push(MovimentsTotals[i]);
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
    if (jugador == BLANC){
        Rei = REI_BLANC
    }
    let posicioRei = taulell.getPosicioFitxa(Rei);
    if (posicioRei.length != 2){
        throw "No hi ha rei"
    }
    let check = false;
    let MovimentsTotals = LlistarMoviments(taulell, !jugador);
    for (let i = 0; i<MovimentsTotals.length; i++){
        if (MovimentsTotals[i].getFitxaEnPosicio(posicioRei[0], posicioRei[1]).peça != Rei && MovimentsTotals[i].getFitxaEnPosicio(posicioRei[0], posicioRei[1]).peça != BUIDA){
            check = true;
        }
    }
    return check
}
