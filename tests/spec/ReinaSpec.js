describe('MoveKnower', function() {

    describe('Una Reina', function() {
  
        describe('Al crear-la', function() {
            
            let reina_blanca = new Reina(BLANC, true);
            let reina_negra = new Reina(NEGRE, true);
    
            it('ha de respectar el color del constructor', function() {
                expect(reina_blanca.getColor()).toEqual(BLANC);
                expect(reina_negra.getColor()).toEqual(NEGRE);
            });
    
            it('ha de respectar el tipus de peça i el valor del constructor', function() {
                expect(reina_blanca.peça).toEqual(REINA_BLANCA);
                expect(reina_negra.peça).toEqual(REINA_NEGRA);
                expect(reina_blanca.valor).toEqual(9);
                expect(reina_negra.valor).toEqual(-9);
            });
    
            it('ha de fallar la creacio si el jugador no és vàlid', function() {
                expect(function() {
                    let torre = new Reina("blabla");
                }).toThrow('Color no vàlid: blabla');
            });
        });
  
        describe("Al moure'l standard", function() {
            let reina_blanca = new Reina(BLANC, true);
            let inicial = new Taulell()
                .addFitxaEnPosicio(4, 5, reina_blanca);
            it("Comprovar la posició", function() {
                expect(inicial.getFitxaEnPosicio(4,5)).toBe(reina_blanca);
            });
            it("El movem i comprovem la posició", function(){
                let moviments = reina_blanca.moves(4, 5, inicial)
                expect(moviments.every((r) => r.getAllFitxaEnPosicio()[0][0].peça == REINA_BLANCA)).toEqual(true);
                expect(moviments[0].getFitxaEnPosicio(4, 5)).toEqual(BUIDA)
            });
        });

        describe("Al moure'l  per caselles", function(){
            let reina_blanca = new Reina(BLANC, true);
            it("Ha de moure horitzontalment i verticalment només", function(){
                let inicial = new Taulell()
                    .addFitxaEnPosicio(4, 5, reina_blanca);
                let moviments = reina_blanca.moves(4, 5, inicial)
                expect(moviments.length).toEqual(22);
                expect(moviments.filter((posicio) => posicio.getAllFitxaEnPosicio()[0][1] == 4).length).toEqual(7);
                expect(moviments.filter((posicio) => posicio.getAllFitxaEnPosicio()[0][2] == 5).length).toEqual(7);
                expect(moviments.filter((posicio) => Math.abs(posicio.getAllFitxaEnPosicio().filter((arr) => 
                    arr[0].peça == reina_blanca)[0][1]-4) == Math.abs(posicio.getAllFitxaEnPosicio().filter((arr) => 
                        arr[0].peça == reina_blanca)[0][2]-5)).length).toEqual(11);
            });
            it("El nombre s'ha de reduir en 3 si hi afegim una fitxa blanca a 3 caselles de la vora", function(){
                let inicial = new Taulell()
                    .addFitxaEnPosicio(4, 5, reina_blanca)
                    .addFitxaEnPosicio(2, 5, new Peo(BLANC, true))
                    .addFitxaEnPosicio(4, 2, new Peo(BLANC, true))
                    .addFitxaEnPosicio(1, 2, new Peo(BLANC, true))
                    .addFitxaEnPosicio(6, 3, new Peo(BLANC, true));
                let moviments = reina_blanca.moves(4, 5, inicial)
                expect(moviments.length).toEqual(15);
                expect(moviments.filter((taulell) => 
                    taulell.getAllFitxaEnPosicio().filter((arr) => 
                        arr[0].peça == reina_blanca)[0][1] == 4).length).toEqual(4);
                expect(moviments.filter((taulell) => 
                    taulell.getAllFitxaEnPosicio().filter((arr) => 
                        arr[0].peça == reina_blanca)[0][2] == 5).length).toEqual(4);
                expect(moviments.filter((posicio) => Math.abs(posicio.getAllFitxaEnPosicio().filter((arr) => 
                    arr[0].peça == reina_blanca)[0][1]-4) == Math.abs(posicio.getAllFitxaEnPosicio().filter((arr) => 
                        arr[0].peça == reina_blanca)[0][2]-5)).length).toEqual(7);
            });
            it("El nombre s'ha de reduir en 2 si hi afegim una fitxa negre a 3 caselles de la vora", function(){
                let inicial = new Taulell()
                    .addFitxaEnPosicio(4, 5, reina_blanca)
                    .addFitxaEnPosicio(2, 5, new Peo(NEGRE, true))
                    .addFitxaEnPosicio(4, 2, new Peo(NEGRE, true))
                    .addFitxaEnPosicio(1, 2, new Peo(NEGRE, true))
                    .addFitxaEnPosicio(6, 3, new Peo(NEGRE, true));
                let moviments = reina_blanca.moves(4, 5, inicial)
                expect(moviments.length).toEqual(19);
                expect(moviments.filter((taulell) => 
                    taulell.getAllFitxaEnPosicio().filter((arr) => 
                        arr[0].peça == reina_blanca)[0][1] == 4).length).toEqual(5);
                expect(moviments.filter((taulell) => 
                    taulell.getAllFitxaEnPosicio().filter((arr) => 
                        arr[0].peça == reina_blanca)[0][2] == 5).length).toEqual(5);
                expect(moviments.filter((posicio) => Math.abs(posicio.getAllFitxaEnPosicio().filter((arr) => 
                    arr[0].peça == reina_blanca)[0][1]-4) == Math.abs(posicio.getAllFitxaEnPosicio().filter((arr) => 
                        arr[0].peça == reina_blanca)[0][2]-5)).length).toEqual(9);
            });
        });
      
        describe("Al clonar-lo", function() {
            let reina_blanca = new Reina(BLANC, false);
            let reina_blanca2 = reina_blanca.cloneFitxa();
            it('Que el clone et torni un peo amb les mateixes propietats que les dabans menys el premoves', function(){
                expect(reina_blanca.peça).toEqual(REINA_BLANCA)
                expect(reina_blanca.color).toEqual(BLANC)
                expect(reina_blanca.preMoves).toEqual(false)
                expect(reina_blanca2.peça).toEqual(REINA_BLANCA)
                expect(reina_blanca2.color).toEqual(BLANC)
                expect(reina_blanca2.preMoves).toEqual(true)
            });
        });
    });
});
