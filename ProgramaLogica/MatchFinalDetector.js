class MatchEnd{
    constructor(inicial){
    }

    ScanCheckmate(taulell, jugador){
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
            throw "Checkmate, ha guanyat el jugador"+!jugador
        }
    }

    ScanCheck(taulell, jugador){
        let Rei = REI_NEGRE
        if (jugador == BLANC){
            Rei = REI_BLANC
        }
        let posicioRei = taulell.getPosicioFitxa(taulell, Rei)
        let check = false;
        let MovimentsTotals = new Array(LlistarMoviments(taulell));
        for (let i = 0; i<MovimentsTotals.length; i++){
            if (MovimentsTotals[i][posicioRei[0]][posicioRei[1]] != Rei && MovimentsTotals[i][posicioRei[0]][posicioRei[1]] != BUIDA){
                let check = true
            }
        }
        return check
    }
}