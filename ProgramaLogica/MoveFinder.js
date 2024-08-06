function LlistarMoviments(taulell, jugador, nomesMenjant){
    let PecesiPosicio = taulell.getAllFitxaEnPosicio()
    let TaulellsDespresMoviment = new Array()
    for (let z = 0; z<PecesiPosicio.length; z++){
        let peça = PecesiPosicio[z][0];
        if(peça.color == jugador){
            TaulellsDespresMoviment = TaulellsDespresMoviment.concat(
                peça.moves(PecesiPosicio[z][1], PecesiPosicio[z][2], taulell, nomesMenjant)
            );
        }
    }
    return TaulellsDespresMoviment
}
