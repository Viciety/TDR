describe('MoveKnower', function() {

    describe('Una Torre', function() {
  
        describe('Al crear-la', function() {
            
            let torre_blanca = new Torre(BLANC, true);
            let torre_negra = new Torre(NEGRE, true);
    
            it('ha de respectar el color del constructor', function() {
                expect(torre_blanca.getColor()).toEqual(BLANC);
                expect(torre_negra.getColor()).toEqual(NEGRE);
            });
    
            it('ha de respectar el tipus de peça i el valor del constructor', function() {
                expect(torre_blanca.peça).toEqual(TORRE_BLANCA);
                expect(torre_negra.peça).toEqual(TORRE_NEGRA);
                expect(torre_blanca.valor).toEqual(5);
                expect(torre_negra.valor).toEqual(-5);
            });
    
            it('ha de fallar la creacio si el jugador no és vàlid', function() {
                expect(function() {
                    let torre = new Torre("blabla");
                }).toThrow('Color no vàlid: blabla');
            });
        });
  
        describe("Al moure'l standard", function() {
            let torre_blanca = new Torre(BLANC, true);
            let inicial = new Taulell()
                .addFitxaEnPosicio(4, 5, torre_blanca);
            it("Comprovar la posició", function() {
                expect(inicial.getFitxaEnPosicio(4,5)).toBe(torre_blanca);
            });
            it("El movem i comprovem la posició", function(){
                let move = torre_blanca.moves(4, 5, inicial)
                expect(move.every((r) => r.getAllFitxaEnPosicio()[0][0].peça == TORRE_BLANCA)).toEqual(true);
                expect(move[0].getFitxaEnPosicio(4, 5)).toEqual(BUIDA)
            });
        });

        describe("Al moure'l  per caselles", function(){
            let torre_blanca = new Torre(BLANC, true);
            it("Ha de moure horitzontalment i verticalment només", function(){
                let inicial = new Taulell()
                    .addFitxaEnPosicio(4, 5, torre_blanca);
                let move = torre_blanca.moves(4, 5, inicial)
                expect(move.length).toEqual(14);
                expect(move.filter((posicio) => posicio.getAllFitxaEnPosicio()[0][1] == 4).length).toEqual(7);
                expect(move.filter((posicio) => posicio.getAllFitxaEnPosicio()[0][2] == 5).length).toEqual(7);
            });
            it("El nombre s'ha de reduir en 3 si hi afegim una fitxa blanca a 3 caselles de la vora", function(){
                let inicial = new Taulell()
                    .addFitxaEnPosicio(4, 5, torre_blanca).addFitxaEnPosicio(2, 5, new Peo(BLANC, true, false)).addFitxaEnPosicio(4, 2, new Peo(BLANC, true, false));
                let moviments = torre_blanca.moves(4, 5, inicial)
                expect(moviments.length).toEqual(8);
                expect(moviments.filter((taulell) => 
                    taulell.getAllFitxaEnPosicio().filter((arr) => 
                        arr[0].peça == TORRE_BLANCA)[0][1] == 4).length).toEqual(4);
                expect(moviments.filter((taulell) => 
                    taulell.getAllFitxaEnPosicio().filter((arr) => 
                        arr[0].peça == TORRE_BLANCA)[0][2] == 5).length).toEqual(4);
            });
            it("El nombre s'ha de reduir en 2 si hi afegim una fitxa negre a 3 caselles de la vora", function(){
                let inicial = new Taulell()
                    .addFitxaEnPosicio(4, 5, torre_blanca).addFitxaEnPosicio(2, 5, new Peo(NEGRE, true, false)).addFitxaEnPosicio(4, 2, new Peo(NEGRE, true, false));
                let moviments = torre_blanca.moves(4, 5, inicial)
                expect(moviments.length).toEqual(10);
                expect(moviments.filter((taulell) => 
                    taulell.getAllFitxaEnPosicio().filter((arr) => 
                        arr[0].peça == TORRE_BLANCA)[0][1] == 4).length).toEqual(5);
                expect(moviments.filter((taulell) => 
                    taulell.getAllFitxaEnPosicio().filter((arr) => 
                        arr[0].peça == TORRE_BLANCA)[0][2] == 5).length).toEqual(5);
            });
        });
      
        describe("Al clonar-lo", function() {
            let torre_blanca = new Torre(BLANC, false);
            let torre_blanca2 = torre_blanca.cloneFitxa();
            it('Que el clone et torni un peo amb les mateixes propietats que les dabans menys el premoves', function(){
                expect(torre_blanca.peça).toEqual(TORRE_BLANCA)
                expect(torre_blanca.color).toEqual(BLANC)
                expect(torre_blanca.preMoves).toEqual(false)
                expect(torre_blanca2.peça).toEqual(TORRE_BLANCA)
                expect(torre_blanca2.color).toEqual(BLANC)
                expect(torre_blanca2.preMoves).toEqual(true)
            });
        });
    });
});
