describe('MoveKnower', function() {

  describe('Un peó', function() {

    describe('Al crear-lo', function() {
      
      let peo_blanc = new Peo(BLANC, true);
      let peo_negre = new Peo(NEGRE, true);

      it('ha de respectar el color del constructor quan es blanc', function() {
        expect(peo_blanc.getColor()).toEqual(BLANC);
      });

      it('ha de respectar el color del constructor quan es negre', function() {
        expect(peo_negre.getColor()).toEqual(NEGRE);
      });

      it('ha de fallar la creacio si el jugador no és vàlid', function() {
        expect(function() {
          let peo = new Peo("blabla");
        }).toThrow('Color no vàlid: blabla');
      });
    });

    describe("Al moure'l", function() {
      let peo_blanc = new Peo(BLANC, true);
      let inicial = new Taulell()
        .addFitxaEnPosicio(4, 5, peo_blanc);
      it("Comprovar la posició", function() {
        expect(inicial.getFitxaEnPosicio(4,5)).toBe(peo_blanc);
      });
      it("El movem i comprovem la posició", function(){
        let move = peo_blanc.moves(4, 5, inicial)
        expect(move.length).toEqual(1)
        expect(move[0].getFitxaEnPosicio(3, 5).peça).toEqual(PEO_BLANC);
        expect(move[0].getFitxaEnPosicio(4, 5)).toEqual(BUIDA)
      });
    });
    
    describe("Al clonar-lo", function() {
      let peo_blanc = new Peo(BLANC, false);
      let peo_blanc2 = peo_blanc.cloneFitxa();
      it('Que el clone et torni un peo amb les mateixes propietats que les dabans', function(){
        expect(peo_blanc.peça).toEqual(PEO_BLANC)
        expect(peo_blanc.color).toEqual(BLANC)
        expect(peo_blanc.preMoves).toEqual(false)
        expect(peo_blanc2.peça).toEqual(PEO_BLANC)
        expect(peo_blanc2.color).toEqual(BLANC)
        expect(peo_blanc2.preMoves).toEqual(true)
      });
    });
  });
});
