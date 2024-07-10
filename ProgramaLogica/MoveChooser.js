function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
function TriarMoviment(PossiblesMoviments, jugador){
    let PossiblesMovimentsValids = PossiblesMoviments.filter((possibleTaulell) => !ScanCheck(possibleTaulell, jugador));
    let numero = getRandomInt(0, PossiblesMovimentsValids.length-1)
    let moviment = PossiblesMovimentsValids[numero];
    /*
    ComprovarMovimentsMoveChooser(PossiblesMovimentsValids);
    console.log(numero);
    console.log(moviment);
    */
    return moviment
}
/*
function ComprovarMovimentsMoveChooser(TaulellsDespresMoviment){
    for (let x = 0; x<TaulellsDespresMoviment.length; x++){
        if (TaulellsDespresMoviment[x] == undefined){
            throw "El taulell "+x+" no esta definit (Error al MoveChooser)"
        }
    }
    console.log("Comprovació correcta");
}
    */