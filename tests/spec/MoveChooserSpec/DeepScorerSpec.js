describe('Deep Scorer', function() {

    describe("Amb una profunditat que no sigui un número", function() {

        it('Ha de fer un throw', function() {
            expect(function(){new DeepScorer(new Array())}).toThrow('Invalid depth: '+new Array());
            expect(function(){new DeepScorer(10)}).not.toThrow('Invalid depth: '+10);
        });

    });

    describe('Taulell smothered checkmate i checkmate scorer', function() {
        let scorer1 = new Array(new Array(new CheckmateScorer(), 1));
        let composed = new ComposedScorer(scorer1);
        let depp = new DeepScorer(2, composed)
        
        let taulellAmbPeo = new Taulell()
            .addFitxaEnPosicio(7, 0, new Rei(BLANC, true))
            .addFitxaEnPosicio(2, 3, new Rei(NEGRE, true))
            .addFitxaEnPosicio(6, 2, new Cavall(NEGRE, true))
            .addFitxaEnPosicio(6, 0, new Peo(BLANC, true))
            .addFitxaEnPosicio(6, 1, new Peo(BLANC, true))
            .addFitxaEnPosicio(7, 1, new Torre(BLANC, true));

        it('Ha de tornar 1 pel negre', function() {
        expect(depp.scoreBoard(taulellAmbPeo, NEGRE)).toEqual(1);
        });
    });

    
});