describe('MoveKnower', function() {

    describe('Un cavall', function() {
  
      describe('Al crear-lo', function() {
        
        let cavall_blanc = new Cavall(BLANC, true);
        let cavall_negre = new Cavall(NEGRE, true);
  
        it('ha de respectar el color del constructor', function() {
          expect(cavall_blanc.getColor()).toEqual(BLANC);
          expect(cavall_negre.getColor()).toEqual(NEGRE);
        });
  
        it('ha de respectar el tipus de peça i el valor del constructor', function() {
            expect(cavall_blanc.peça()).toEqual(CAVALL_BLANC);
            expect(cavall_negre.peça()).toEqual(CAVALL_NEGRE);
            expect(cavall_blanc.valor()).toEqual(3);
            expect(cavall_negre.valor()).toEqual(-3);
        });
  
        it('ha de fallar la creacio si el jugador no és vàlid', function() {
          expect(function() {
            let peo = new Cavall("blabla");
          }).toThrow('Color no vàlid: blabla');
        });
      });
  
      describe("Al moure'l", function() {
        let cavall_blanc = new Cavall(BLANC, true);
        let inicial = new Taulell()
          .addFitxaEnPosicio(4, 5, cavall_blanc);
        it("Comprovar la posició", function() {
          expect(inicial.getFitxaEnPosicio(4,5)).toBe(cavall_blanc);
        });
        it("El movem i comprovem la posició", function(){
          let move = cavall_blanc.moves(4, 5, inicial)
          expect(move.length).toEqual(8)
          expect(move[0].getAllFitxaEnPosicio()[0].peça).toEqual(CAVALL_BLANC);
          expect(move[0].getFitxaEnPosicio(4, 5)).toEqual(BUIDA)
        });
      });
      
      describe("Al clonar-lo", function() {
        let cavall_blanc = new Cavall(BLANC, false);
        let cavall_blanc2 = cavall_blanc.cloneFitxa();
        it('Que el clone et torni un peo amb les mateixes propietats que les dabans menys el premoves', function(){
          expect(cavall_blanc.peça).toEqual(CAVALL_BLANC)
          expect(cavall_blanc.color).toEqual(BLANC)
          expect(cavall_blanc.preMoves).toEqual(false)
          expect(cavall_blanc2.peça).toEqual(CAVALL_BLANC)
          expect(cavall_blanc2.color).toEqual(BLANC)
          expect(cavall_blanc2.preMoves).toEqual(true)
        });
      });
    });
  });
  