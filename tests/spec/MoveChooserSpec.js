describe('MoveChooser', function() {
    describe('Té un sol moviment i ha de tornar aquest', function() {
        
        let taulellAmbRei = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(NEGRE, true));
        let PossiblesMoviments = new Array (taulellAmbRei);
        let jugador = NEGRE;

        it('Ha de triar un només i no ha de ser undefined', function() {
            for (let x = 0; x<50; x++){
                expect(TriarMoviment(PossiblesMoviments, jugador)).not.toEqual(undefined);
                expect(TriarMoviment(PossiblesMoviments, jugador)).toEqual(taulellAmbRei);
            }
        });
    });
});