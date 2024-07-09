function LlistarMoviments(taulell, jugador){
    let PecesiPosicio = taulell.getAllFitxaEnPosicio()
    let TaulellsDespresMoviment = new Array()
    for (let x = 0; x<PecesiPosicio.length; x++){
        let peça = PecesiPosicio[x][0];
        if(peça.color == jugador){
            TaulellsDespresMoviment = TaulellsDespresMoviment.concat(peça.moves(PecesiPosicio[x][1], PecesiPosicio[x][2], taulell));
        }
    }
    //ComprovarMovimentsMoveFinder(TaulellsDespresMoviment);
    return TaulellsDespresMoviment
}
/*
function ComprovarMovimentsMoveFinder(TaulellsDespresMoviment){
    for (let x = 0; x<TaulellsDespresMoviment.length; x++){
        if (TaulellsDespresMoviment[x] == undefined){
            throw "El taulell "+x+" no esta definit (Error al MoveFinder)"
        }
    }
    console.log("Comprovació correcta")
}
    */