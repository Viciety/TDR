describe('Llistar Moviments', function() {
    describe('Amb Peons', function() {
        let peo_blanc = new Peo(BLANC, true, false);
        let inicial = new Taulell()
            .addFitxaEnPosicio(4, 5, peo_blanc);

        it('Ha de tornar el moviment de la peça', function() {
            expect(LlistarMoviments(inicial, BLANC).length).toEqual(1);
        });

        it('Ha de obviar el enroc', function() {
            expect(LlistarMoviments(inicial, BLANC, true).length).toEqual(0);
        });
    });

    describe('Amb moviments en check', function() {
        let torre_blanca = new Torre(BLANC, true);
        let rei_negre = new Rei(NEGRE, true);
        let inicial = new Taulell()
            .addFitxaEnPosicio(6, 7, torre_blanca)
            .addFitxaEnPosicio(7, 0, rei_negre);

        it('Ha de tornar només un moviment', function() {
            expect(LlistarMovimentsValids(inicial, NEGRE).length).toEqual(1);
        });
    });

});