describe('MoveKnower', function() {

    describe('Un Alfil', function() {
  
        describe('Al crear-lo', function() {
            
            let alfil_blanc = new Alfil(BLANC, true);
            let alfil_negre = new Alfil(NEGRE, true);
    
            it('ha de respectar el color del constructor', function() {
                expect(alfil_blanc.getColor()).toEqual(BLANC);
                expect(alfil_negre.getColor()).toEqual(NEGRE);
            });
    
            it('ha de respectar el tipus de peça i el valor del constructor', function() {
                expect(alfil_blanc.peça).toEqual(ALFIL_BLANC);
                expect(alfil_negre.peça).toEqual(ALFIL_NEGRE);
                expect(alfil_blanc.valor).toEqual(3);
                expect(alfil_negre.valor).toEqual(-3);
            });
    
            it('ha de fallar la creacio si el jugador no és vàlid', function() {
                expect(function() {
                    let torre = new Alfil("blabla");
                }).toThrow('Color no vàlid: blabla');
            });
        });
  
        describe("Al moure'l standard", function() {
            let alfil_blanc = new Alfil(BLANC, true);
            let inicial = new Taulell()
                .addFitxaEnPosicio(4, 5, alfil_blanc);
            it("Comprovar la posició", function() {
                expect(inicial.getFitxaEnPosicio(4,5)).toBe(alfil_blanc);
            });
            it("El movem i comprovem la posició", function(){
                let moviments = alfil_blanc.moves(4, 5, inicial)
                expect(moviments.every((r) => r.getAllFitxaEnPosicio()[0][0].peça == ALFIL_BLANC)).toEqual(true);
                expect(moviments[0].getFitxaEnPosicio(4, 5)).toEqual(BUIDA)
            });
        });

        describe("Al moure'l  per caselles", function(){
            let alfil_blanc = new Alfil(BLANC, true);
            it("Ha de moure En diagonal només", function(){
                let inicial = new Taulell()
                    .addFitxaEnPosicio(4, 5, alfil_blanc);
                let moviments = alfil_blanc.moves(4, 5, inicial)
                expect(moviments.length).toEqual(11);
                expect(moviments.filter((posicio) => Math.abs(posicio.getAllFitxaEnPosicio()[0][1]-4) == Math.abs(posicio.getAllFitxaEnPosicio()[0][2]-5)).length).toEqual(11);
            });
            it("El nombre s'ha de reduir en 3 si hi afegim una fitxa blanca a 3 caselles de la vora", function(){
                let inicial = new Taulell()
                    .addFitxaEnPosicio(4, 5, alfil_blanc).addFitxaEnPosicio(1, 2, new Peo(BLANC, true, false)).addFitxaEnPosicio(6, 3, new Peo(BLANC, true, false));
                let moviments = alfil_blanc.moves(4, 5, inicial)
                expect(moviments.length).toEqual(7);
                expect(moviments.filter((posicio) => Math.abs(posicio.getAllFitxaEnPosicio().filter((arr) => 
                    arr[0].peça == alfil_blanc.peça)[0][1]-4) == Math.abs(posicio.getAllFitxaEnPosicio().filter((arr) => 
                        arr[0].peça == alfil_blanc.peça)[0][2]-5)).length).toEqual(7);
                ;
            });
            it("El nombre s'ha de reduir en 2 si hi afegim dues fitxes negres", function(){
                let inicial = new Taulell()
                    .addFitxaEnPosicio(4, 5, alfil_blanc).addFitxaEnPosicio(1, 2, new Peo(NEGRE, true, false)).addFitxaEnPosicio(6, 3, new Peo(NEGRE, true, false));
                let moviments = alfil_blanc.moves(4, 5, inicial)
                expect(moviments.length).toEqual(9);
                expect(moviments.filter((posicio) => Math.abs(posicio.getAllFitxaEnPosicio().filter((arr) => 
                    arr[0].peça == alfil_blanc.peça)[0][1]-4) == Math.abs(posicio.getAllFitxaEnPosicio().filter((arr) => 
                        arr[0].peça == alfil_blanc.peça)[0][2]-5)).length).toEqual(9);
                ;
            });
        });
      
        describe("Al clonar-lo", function() {
            let alfil_blanc = new Alfil(BLANC, false);
            let alfil_blanc2 = alfil_blanc.cloneFitxa();
            it('Que el clone et torni un alfil amb les mateixes propietats que les dabans menys el premoves', function(){
                expect(alfil_blanc.peça).toEqual(ALFIL_BLANC)
                expect(alfil_blanc.color).toEqual(BLANC)
                expect(alfil_blanc.preMoves).toEqual(false)
                expect(alfil_blanc2.peça).toEqual(ALFIL_BLANC)
                expect(alfil_blanc2.color).toEqual(BLANC)
                expect(alfil_blanc2.preMoves).toEqual(true)
            });
        });
    });
});
