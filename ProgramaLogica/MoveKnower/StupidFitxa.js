class StupidFitxa{
    constructor(color, peça){
        this.color = color;
        this.peça = peça;
    }
     
    cloneFitxa(){
        return new StupidFitxa(this.color, this.peça)
    }

    getColor(){
        return this.color
    }

    moves(inicialVerticalCoord, inicialHoritzontalCoord, taulell){
        let PossiblesMoviments = new Array();
        return PossiblesMoviments
    }
}