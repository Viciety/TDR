describe('Llistar Moviments', function() {
    describe('Amb Peons', function() {
        let peo_blanc = new Peo(BLANC, true, false);
        let inicial = new Taulell()
            .addFitxaEnPosicio(4, 5, peo_blanc);

        it('Ha de tornar el moviment de la peça', function() {
            expect(LlistarMoviments(inicial, BLANC).length).toEqual(1);
        });

        it('Ha de obviar la peça', function() {
            expect(LlistarMoviments(inicial, BLANC, true).length).toEqual(0);
        });
    });
});