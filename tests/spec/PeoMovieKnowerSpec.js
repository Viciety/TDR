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

    /* *FALTA ARREGLAR*
    describe("Al moure'l", function() {
      let inicial = new Taulell()
        .addFitxaEnPosicio(4, 5, new Peo(BLANC, false));

      it("Comprovar la posició", function() {
        expect(inicial.getPosicioFitxa(Peo)).toBe((4, 5));
      });
      it("El movem i comprovem la posició", function(){
        expect(Peo.moves(4, 5, inicial).getPosicioFitxa(Peo)).toEqual(3,5);
      });
    });
    */
  });
});
