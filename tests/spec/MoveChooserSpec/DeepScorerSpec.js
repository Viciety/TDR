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
        let depp = new DeepScorer(2, composed);
        it('Ha de tornar 1 pel negre', function() {
        expect(depp.scoreBoard(SmotheredMateNegreIn2, NEGRE)).toEqual(1);
        });
    });

    describe('Taulell rook checkmate prioritza menys profunditat', function() {
        let scorer1 = new Array(new Array(new CheckmateScorer(), 1));
        let composed = new ComposedScorer(scorer1);
        let depp = new DeepScorer(2, composed);
        let KingAndRookVSKingInCorner = new Taulell()
            .addFitxaEnPosicio(0, 7, new Rei(BLANC, true))
            .addFitxaEnPosicio(2, 6, new Rei(NEGRE, true))
            .addFitxaEnPosicio(7, 1, new Torre(NEGRE, true))
        
        it('Ha de tornar 1 pel negre', function() {
            expect(depp.scoreBoard(KingAndRookVSKingInCorner, NEGRE)).toEqual(1);
        });
    });

    
});