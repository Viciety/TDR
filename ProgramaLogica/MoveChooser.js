function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
function TriarMoviment(PossiblesMoviments){
    PossiblesMoviments.filter((possibleTaulell) => !ScanCheck(possibleTaulell, jugador));
    let moviment = PossiblesMoviments[getRandomInt(0, PossiblesMoviments.length)];
    return moviment
}