describe('MoveKnower', function() {

  describe('Un rei', function() {
          
    let rei_blanc = new Rei(BLANC);
    let rei_negre = new Rei(NEGRE);

    describe('Al crear-lo', function() {

      it('ha de respectar el color del constructor quan es blanc', function() {
        expect(rei_blanc.getColor()).toEqual(BLANC);
      });

      it('ha de respectar el color del constructor quan es negre', function() {
        expect(rei_negre.getColor()).toEqual(NEGRE);
      });

      it('ha de fallar la creacio si el jugador no és vàlid', function() {
        expect(function() {
          let rei = new Rei("blabla");
        }).toThrow('Color no vàlid: blabla');
      });
    });
    describe("Al moure'l", function() {
      describe("en mig del taulell, sol", function() {
        let taulell = new Taulell().addFitxaEnPosicio(4,5,rei_blanc);
        it("ha de tornar 8 possibles moviments", function() {
          let taulells = rei_blanc.moves(4,5,taulell);
          expect(taulells.length).toEqual(8);
        });
        it("ha de tornar taulells possibles on nomes hi hagi un rei", function() {
          let taulells = rei_blanc.moves(4,5,taulell);
          taulells.forEach((taulell) => {
            let fitxes = taulell.getAllFitxaEnPosicio();
            expect(fitxes.length).toEqual(1);
            expect(fitxes[0][0].peça).toEqual(REI_BLANC);
          })
        });
        it("ha de tornar taulells on el rei no esta més lluny d'una posicio", function() {
          let taulells = rei_blanc.moves(4,5,taulell);
          taulells.forEach((taulell) =>  {
            let fitxes = taulell.getAllFitxaEnPosicio();
            expect(fitxes.length).toEqual(1);
            expect(fitxes[0][1]).toBeGreaterThan(2);
            expect(fitxes[0][1]).toBeLessThan(6);
            expect(fitxes[0][2]).toBeGreaterThan(3);
            expect(fitxes[0][2]).toBeLessThan(7);
          }
          );
        });
      });
    });
  });
});
