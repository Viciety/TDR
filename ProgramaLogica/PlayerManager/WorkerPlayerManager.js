class WorkerPlayerManager{
    constructor(crida, jugador, scorer){
        this.crida = crida;
        this.jugador = jugador;
        this.scorer = scorer;
    }

    manageTorn(taulell){
        setTimeout(() => {
            let PossiblesMovimentsValids = LlistarMovimentsValids(taulell, this.jugador);
            let seguentTaulell = this.scorer.chooseMove(PossiblesMovimentsValids, this.jugador);
            if (seguentTaulell == undefined){
                throw "Error, no hi ha possible moviments";
            }
            this.crida(seguentTaulell);
        });
    }
}