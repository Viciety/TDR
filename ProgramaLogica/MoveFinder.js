function LlistarMoviments(taulell, jugador){
    let PecesiPosicio = taulell.getAllFitxaEnPosicio()
    let TaulellsDespresMoviment = new Array()
    for (let x = 0; x<PecesiPosicio.length; x++){
        let peça = PecesiPosicio[x][0];
        if(peça.color == jugador){
            TaulellsDespresMoviment = TaulellsDespresMoviment.concat(peça.moves(PecesiPosicio[x][1], PecesiPosicio[x][2], taulell));
        }
    }
    return TaulellsDespresMoviment
}