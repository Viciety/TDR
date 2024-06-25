describe('MoveKnower', function() {

  describe('Un peó', function() {

    describe('Al crear-lo', function() {
      
      let peo_blanc = new Peo(BLANC);
      let peo_negre = new Peo(NEGRE);

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
      it("falten tests de moviment", function() {
        expect(true).toBeTrue();
      });
    });
  });
});
