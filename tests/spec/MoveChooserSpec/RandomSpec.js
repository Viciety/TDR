describe('Random MoveChooser', function() {
    let moveChooser = new RandomMoveChooser();
    describe('Té un sol moviment i ha de tornar aquest', function() {
        
        let taulellAmbRei = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(NEGRE, true));
        let PossiblesMoviments = new Array (taulellAmbRei);
        let jugador = NEGRE;

        it('Ha de triar un només i no ha de ser undefined en 50 vegades', function() {
            let results = new Array();
            for (let z = 0; z<50; z++){
                results.push(moveChooser.chooseMove(PossiblesMoviments, jugador));
            }
            let definedResults = results.filter((r) => r != undefined);

            expect(definedResults.length).toEqual(50);
            expect(results.every((r) => r == taulellAmbRei)).toEqual(true);
        });

    });

    describe('Ara amb els taulells proporcionats pel LlistarMoviment', function() {
        
        let seguentTaulell = new Taulell(true)
        let jugador = BLANC;
        let iteracions = 30;
    
        it('Ha de triar un només i no ha de ser undefined en '+iteracions+' vegades', function() {
            let results = new Array();
            for (let z = 0; z<iteracions; z++){
                let moviments = LlistarMoviments(seguentTaulell, jugador);
                let movimentTriat = moveChooser.chooseMove(moviments, jugador);
                if(movimentTriat == undefined){
                    break;
                }
                seguentTaulell = movimentTriat;
                results.push(seguentTaulell);
                jugador = (jugador == BLANC) ? NEGRE : BLANC;
            }
            let definedResults = results.filter((r) => r != undefined);

            expect(definedResults.length).toEqual(iteracions);
        });

    });

});