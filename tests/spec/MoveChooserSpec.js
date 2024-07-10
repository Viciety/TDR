describe('MoveChooser', function() {
    describe('Té un sol moviment i ha de tornar aquest', function() {
        
        let taulellAmbRei = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(NEGRE, true));
        let PossiblesMoviments = new Array (taulellAmbRei);
        let jugador = NEGRE;

        it('Ha de triar un només i no ha de ser undefined en 50 vegades', function() {
            let results = new Array();
            for (let z = 0; z<50; z++){
                results.push(TriarMoviment(PossiblesMoviments, jugador));
            }
            let definedResults = results.filter((r) => r != undefined);

            expect(definedResults.length).toEqual(50);
            expect(results.every((r) => r == taulellAmbRei)).toEqual(true);
        });

    });

    describe('Ara amb esl taulells proporcionats pel LlistarMoviment', function() {
        
        let seguentTaulell = new Taulell(true)
        let jugador = BLANC;

        it('Ha de triar un només i no ha de ser undefined en 50 vegades', function() {
            let results = new Array();
            for (let z = 0; z<900; z++){
                seguentTaulell = TriarMoviment(LlistarMoviments(seguentTaulell, jugador), jugador);
                results.push(seguentTaulell);
                jugador = (jugador == BLANC) ? NEGRE : BLANC;
            }
            let definedResults = results.filter((r) => r != undefined);

            expect(definedResults.length).toEqual(50);
        });

    });
});