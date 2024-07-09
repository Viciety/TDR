function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
function TriarMoviment(PossiblesMoviments, jugador){
    let PossiblesMovimentsValids = PossiblesMoviments.filter((possibleTaulell) => !ScanCheck(possibleTaulell, jugador));
    let moviment = PossiblesMovimentsValids[getRandomInt(0, PossiblesMoviments.length-1)];
    //ComprovarMovimentsMoveChooser(PossiblesMovimentsValids);
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