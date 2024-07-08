describe('Un Taulell', function() {

    describe('Al afegir fitxa', function() {
        let peo_blanc = new Peo(BLANC, true);
        let peo_negre = new Peo(NEGRE, false);
        let inicial = new Taulell()
            .addFitxaEnPosicio(4, 5, peo_blanc);
        let final = inicial.addFitxaEnPosicio(4, 4, peo_negre);

        it('Les fitxes han de ser les mateixes', function() {
            expect(final.getFitxaEnPosicio(4, 5)).toEqual(peo_blanc);
            expect(final.getFitxaEnPosicio(4, 4)).toEqual(peo_negre);
        });

        it('El peo resultant ha de ser una còpia', function() {
            expect(final.getFitxaEnPosicio(4, 5).peça).toEqual(PEO_BLANC);
            expect(final.getFitxaEnPosicio(4, 5).preMoves).toEqual(true);
            expect(final.getFitxaEnPosicio(4, 5).color).toEqual(BLANC);
            expect(final.getFitxaEnPosicio(4, 4).peça).toEqual(PEO_NEGRE);
            expect(final.getFitxaEnPosicio(4, 4).preMoves).toEqual(false);
            expect(final.getFitxaEnPosicio(4, 4).color).toEqual(NEGRE);
        });
    });
    
    describe('Al moure una fitxa', function() {
        let peo_blanc = new Peo(BLANC, false);
        let peo_negre = new Peo(NEGRE, false);
        let inicial = new Taulell()
            .addFitxaEnPosicio(4, 5, peo_blanc);
        let final = inicial.addFitxaEnPosicio(4, 4, peo_negre);

        it('Quan es mou ha de ser diferent però els altres els mateixos', function() {
            let finalAmbMoviment = final.moveFitxaEnPosicio(4, 5, 3, 5)
            expect(finalAmbMoviment.getFitxaEnPosicio(3, 5)).not.toEqual(peo_blanc);
            expect(finalAmbMoviment.getFitxaEnPosicio(4, 4)).toEqual(peo_negre)
        });

        it('Els peons resultant ha de ser una còpia', function() {
            let finalAmbMoviment = final.moveFitxaEnPosicio(4, 5, 3, 5)
            expect(finalAmbMoviment.getFitxaEnPosicio(3, 5).peça).toEqual(PEO_BLANC);
            expect(finalAmbMoviment.getFitxaEnPosicio(3, 5).preMoves).toEqual(true);
            expect(finalAmbMoviment.getFitxaEnPosicio(3, 5).color).toEqual(BLANC);
            expect(finalAmbMoviment.getFitxaEnPosicio(4, 4).peça).toEqual(PEO_NEGRE);
            expect(finalAmbMoviment.getFitxaEnPosicio(4, 4).preMoves).toEqual(false);
            expect(finalAmbMoviment.getFitxaEnPosicio(4, 4).color).toEqual(NEGRE);
        });
    });
});