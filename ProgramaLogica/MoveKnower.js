function MovimentPeoBlanc(i, j, taulell){
    let PossiblesMovimentsPeo = new Array()
    if (i != 0){
        if (j != 0){
            if (taulell.getFitxaEnPosicio(i-1, j-1) > REI_BLANC){
                PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i-1, j-1));
            }
        }
        if (j != 7){
            if (taulell.getFitxaEnPosicio(i-1, j+1) > REI_BLANC){
                PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i-1, j+1));
            }
        }
        if (taulell.getFitxaEnPosicio(i-1, j) == BUIDA){
            PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i-1, j));
        }
    }
    return PossiblesMovimentsPeo
}
function MovimentPeoNegre(i, j, taulell){
    let PossiblesMovimentsPeo = new Array()
    if (i != 7){
        if (j != 0){
            if (taulell.getFitxaEnPosicio(i+1, j-1) < PEO_NEGRE && taulell.getFitxaEnPosicio(i+1, j-1) != BUIDA){
                PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i+1, j-1));
            }
        }
        if (j != 7){
            if (taulell.getFitxaEnPosicio(i+1, j+1) < PEO_NEGRE && taulell.getFitxaEnPosicio(i+1, j+1) != BUIDA){
                PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i+1, j+1));
            }
        }
        if (taulell.getFitxaEnPosicio(i+1, j) == BUIDA){
            PossiblesMovimentsPeo.push(taulell.moveFitxaEnPosicio(i, j, i+1, j));
        }
    }
    return PossiblesMovimentsPeo
}