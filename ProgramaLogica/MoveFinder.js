function LlistarMoviments(PecesiPosicio){
    let TaulellsDespresMoviment = new Array()
    for (let x = 0; x<PecesiPosicio.length; x++){
        if (PecesiPosicio[x][0] = PEO_BLANC){
            TaulellsDespresMoviment.push(MovimentPeoBlanc(PecesiPosicio[x][1], PecesiPosicio[x][2]))
        }
    }
    return TaulellsDespresMoviment
}