const imatges = new Array("LightPawn.png","LightRook.png","LightKnight.png","LightBishop.png","LightQueen.png","LightKing.png",
    "DarkPawn.png","DarkRook.png","DarkKnight.png","DarkBishop.png","DarkQueen.png","DarkKing.png",
)

function DibuixarPeça(taulell, ColorCasella, inicialVerticalCoord, inicialHoritzontalCoord){
    if (taulell.getFitxaEnPosicio(inicialVerticalCoord,inicialHoritzontalCoord) == BUIDA){
        return("<td class='"+ColorCasella+"'></td>");
    }else{
        return("<td class='"+ColorCasella+"'><img title='"+taulell.getFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord).peça+"' width='60px' src=Imatges/Peces/"+imatges[taulell.getFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord).peça-1]+" /> </td>");
    }
}

function DibuixarTaulell(taulell){
    let ColorCasella = 'white';
    let container = document.getElementById("TaulellEscacs");
    let innerHtml = "";
    for (let inicialVerticalCoord  = 0; inicialVerticalCoord <8; inicialVerticalCoord++){
        innerHtml = innerHtml + "<tr>";
        for (let inicialHoritzontalCoord=0; inicialHoritzontalCoord<8; inicialHoritzontalCoord++){
            innerHtml = innerHtml + DibuixarPeça(taulell, ColorCasella, inicialVerticalCoord, inicialHoritzontalCoord);
            ColorCasella = (ColorCasella=='white') ? 'black':'white';
        }
        ColorCasella = (ColorCasella=='white') ? 'black':'white';
        innerHtml = innerHtml + ("</tr>");
    }
    innerHtml = innerHtml + ("<hr/>");
    let table = document.createElement('table');
    table.innerHTML = innerHtml;
    container.appendChild(table);
}
