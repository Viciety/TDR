function LlistarMoviments(taulell, jugador){
    let PecesiPosicio = taulell.getAllFitxaEnPosicio()
    let TaulellsDespresMoviment = new Array()
    for (let x = 0; x<PecesiPosicio.length; x++){
        if (jugador == BLANC){
            if (PecesiPosicio[x][0] == PEO_BLANC){
                TaulellsDespresMoviment = TaulellsDespresMoviment.concat(MovimentPeoBlanc(PecesiPosicio[x][1], PecesiPosicio[x][2], taulell))
            }
        }
        if (jugador == NEGRE){
            if (PecesiPosicio[x][0] == PEO_NEGRE){
                TaulellsDespresMoviment = TaulellsDespresMoviment.concat(MovimentPeoNegre(PecesiPosicio[x][1], PecesiPosicio[x][2], taulell))
            }
        }
    }
    return TaulellsDespresMoviment
}