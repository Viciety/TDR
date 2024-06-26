describe('MatchFinalDetector', function() {

    describe('Check', function() {
  
        describe('Exemple1: Taulell amb rei i peó amenaçador', function() {
        
            let taulellAmbPeo = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(NEGRE))
            .addFitxaEnPosicio(5, 6, new Peo(BLANC))
            .addFitxaEnPosicio(7, 7, new Rei(BLANC));
  
            it('Ha de tornar true si li toca al negre', function() {
            expect(ScanCheck(taulellAmbPeo, NEGRE)).toEqual(true);
            });
        });

        describe('Exemple2: Taulell amb rei i peó passiu', function() {
        
            let taulellAmbPeo = new Taulell()
            .addFitxaEnPosicio(4, 5, new Rei(NEGRE))
            .addFitxaEnPosicio(5, 5, new Peo(BLANC))
            .addFitxaEnPosicio(7, 7, new Rei(BLANC));
  
            it('Ha de tornar false si li toca al blanc', function() {
            expect(ScanCheck(taulellAmbPeo, BLANC)).toEqual(false);
            });
        });

        describe('Exemple3: Taulell amb rei i 2 peons amenaçadors del mateix color', function() {
        
            let taulellAmbPeo = new Taulell()
                .addFitxaEnPosicio(4, 5, new Rei(NEGRE))
                .addFitxaEnPosicio(3, 6, new Peo(NEGRE))
                .addFitxaEnPosicio(3, 4, new Peo(NEGRE))
                .addFitxaEnPosicio(7, 7, new Rei(BLANC));
            it('Ha de tornar false si li toca al negre', function() {
            expect(ScanCheck(taulellAmbPeo, NEGRE)).toEqual(false);
            });
        });
    });

    describe('Checkmate', function() {
  
        describe('Exemple1: Taulell amb rei i peons que estan en checkmate', function() {
        
            let taulellAmbPeo = new Taulell()
                .addFitxaEnPosicio(0, 7, new Rei(NEGRE))
                .addFitxaEnPosicio(1, 6, new Peo(BLANC))
                .addFitxaEnPosicio(2, 6, new Peo(BLANC))
                .addFitxaEnPosicio(2, 5, new Peo(BLANC))
                .addFitxaEnPosicio(1, 5, new Peo(BLANC));
  
            it('Ha de tornar true si li toca al negre', function() {
            expect(ScanCheckmate(taulellAmbPeo, NEGRE)).toEqual(true);
            });
        });

        describe('Exemple2: Taulell amb rei i peó passiu', function() {
        
            let taulellAmbPeo = new Taulell()
                .addFitxaEnPosicio(4, 5, new Rei(NEGRE))
                .addFitxaEnPosicio(5, 5, new Peo(BLANC));
  
            it('Ha de tornar false si li toca al negre', function() {
            expect(ScanCheckmate(taulellAmbPeo, NEGRE)).toEqual(false);
            });
        });

        describe('Exemple3: Taulell amb rei i peons amenaçadors del mateix color en checkmate', function() {
            let taulellAmbPeo = new Taulell()
                .addFitxaEnPosicio(4, 5, new Rei(NEGRE))
                .addFitxaEnPosicio(1, 6, new Peo(NEGRE))
                .addFitxaEnPosicio(2, 6, new Peo(NEGRE))
                .addFitxaEnPosicio(2, 5, new Peo(NEGRE))
                .addFitxaEnPosicio(1, 5, new Peo(NEGRE));
  
            it('Ha de tornar false si li toca al negre', function() {
            expect(ScanCheckmate(taulellAmbPeo, NEGRE)).toEqual(false);
            });
        });
    });
});