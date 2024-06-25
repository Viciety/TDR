function ScanCheckmate(taulell, jugador){
    let checkmate = false
    let MovimentsTotals = new Array();
    let MovimentsValids = new Array();
    MovimentsTotals.concat(LlistarMoviments(taulell));
    if (this.ScanCheck(taulell, jugador) == true){
        for (let i = 0; i<MovimentsTotals.length; i++){
            if (this.ScanCheck(MovimentsTotals[i], jugador) == true){
                continue;
            }else{
                MovimentsValids.push(MovimentsTotals[i]);
            }
        }
    }
    if (MovimentsValids.length == 0){
        return true
    }
}

function ScanCheck(taulell, jugador){
    let Rei = REI_NEGRE
    let torn = BLANC
    if (jugador == BLANC){
        Rei = REI_BLANC
        torn = NEGRE
    }
    let posicioRei = taulell.getPosicioFitxa(taulell, Rei)
    let check = false;
    let MovimentsTotals = LlistarMoviments(taulell, torn);
    for (let i = 0; i<MovimentsTotals.length; i++){
        if (MovimentsTotals[i][posicioRei[0]][posicioRei[1]] != Rei && MovimentsTotals[i][posicioRei[0]][posicioRei[1]] != BUIDA){
            check = true;
        }
    }
    return check
}
