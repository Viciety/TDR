const imatges = new Array("LightPawn.png","LightRook.png","LightKnight.png","LightBishop.png","LightQueen.png","LightKing.png",
    "DarkPawn.png","DarkRook.png","DarkKnight.png","DarkBishop.png","DarkQueen.png","DarkKing.png",
)

function DibuixarPeça(taulell, ColorCasella, inicialVerticalCoord, inicialHoritzontalCoord){
    if (taulell.getFitxaEnPosicio(inicialVerticalCoord,j) == BUIDA){
        document.write("<td class='"+ColorCasella+"'></td>");
    }else{
        document.write("<td class='"+ColorCasella+"'><img title='"+taulell.getFitxaEnPosicio(inicialVerticalCoordj).peça+"' width='60px' src=Imatges/Peces/"+imatges[taulell.getFitxaEnPosicio(inicialVerticalCoord, inicialHoritzontalCoord).peça-1]+" /> </td>");
    }
}

function DibuixarTaulell(taulell){
    let ColorCasella = 'white';
    document.write("<table>");
    for (let inicialVerticalCoord  = 0; inicialVerticalCoord <8; inicialVerticalCoord ++){
        document.write("<tr>");
        for (let j=0; j<8; j++){
            DibuixarPeça(taulell, ColorCasella, inicialVerticalCoord, inicialHoritzontalCoord)
            ColorCasella = (ColorCasella=='white') ? 'black':'white';
        }
        ColorCasella = (ColorCasella=='white') ? 'black':'white';
        document.write("</tr>");
    }
    document.write("</table>");
    document.write("<hr/>");
}
