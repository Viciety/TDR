function LlistarMoviments(taulell, jugador){
    let PecesiPosicio = taulell.getAllFitxaEnPosicio()
    let TaulellsDespresMoviment = new Array()
    for (let z = 0; z<PecesiPosicio.length; z++){
        let peça = PecesiPosicio[z][0];
        if(peça.color == jugador){
            TaulellsDespresMoviment = TaulellsDespresMoviment.concat(peça.moves(PecesiPosicio[z][1], PecesiPosicio[z][2], taulell));
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