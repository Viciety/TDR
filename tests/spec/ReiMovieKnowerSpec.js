describe('MoveKnower', function() {

  describe('Un rei', function() {
          
    let rei_blanc = new Rei(BLANC, true);
    let rei_negre = new Rei(NEGRE, true);

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
      describe("en mig del taulell amb un peó", function() {      
        let taulell_blanc = new Taulell().addFitxaEnPosicio(4,5,rei_blanc).addFitxaEnPosicio(4,6,new Peo(BLANC, true));
        it("No ha de tornar el taulell sense el peó blanc", function(){
          let taulells = rei_blanc.moves(4,5, taulell_blanc)
          expect(taulells.length).toEqual(7);
          taulells.forEach((taulell_blanc) => {
            let fitxes = taulell_blanc.getAllFitxaEnPosicio();
            expect(fitxes.length).toEqual(2);
          })
        });
        let taulell_negre = new Taulell().addFitxaEnPosicio(4,5,rei_negre).addFitxaEnPosicio(4,6,new Peo(NEGRE, true));
        it("No ha de tornar el taulell sense el peó negre", function(){
          let taulells = rei_negre.moves(4,5, taulell_negre)
          expect(taulells.length).toEqual(7);
          taulells.forEach((taulell_negre) => {
            let fitxes = taulell_negre.getAllFitxaEnPosicio();
            expect(fitxes.length).toEqual(2);
          });
        });
      });
      describe("en el taulell inicial", function() {      
        let taulell_inicial = new Taulell(true);
        it("No s'ha de poder moure", function(){
          let taulells = rei_negre.moves(0, 4, taulell_inicial)
          expect(taulells.length).toEqual(0);
        });
      });
      describe("en una cantonada", function() {      
        let taulell_blanc = new Taulell().addFitxaEnPosicio(7,7,rei_blanc);
        it("No ha de tornar més de 3 taulells", function(){
          let taulells = rei_blanc.moves(7,7, taulell_blanc)
          expect(taulells.length).toEqual(3);
        });
      });
    });
  });
});

