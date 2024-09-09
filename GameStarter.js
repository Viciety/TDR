function StartGame(){

    function crida(seguentTaulell){
        DibuixarTaulell(seguentTaulell);
        if (ScanCheckmate(seguentTaulell, !playerManagers[currentPlayerManager].jugador)){
            resultat = Victoria;
        }
        if (ScanStalemate(seguentTaulell, playerManagers[currentPlayerManager].jugador)){
            document.write("Taules per rei ofegat");
            resultat = Taules;
        }
        if (ScanInsufficientMaterial(seguentTaulell)){
            resultat = Taules;
        }
        moviments++;
        if(resultat == NoHaAcabat && moviments<maxMoviments){
            console.log(currentPlayerManager)
            currentPlayerManager = (currentPlayerManager + 1) % 2
            playerManagers[currentPlayerManager].manageTorn(seguentTaulell);
        }
    };

    let playerManagers = BuildPlayers(crida);

    //Definició del Taulell
    let inicial = TwoVSOnePawnAndKings;

    //Pintant el Taulell al l'HTML
    DibuixarTaulell(inicial);
    
    const NoHaAcabat = 0;
    const Victoria = 1;
    const Taules = 2;

    //Paràmetres inicials
    let moviments = 0;
    let maxMoviments = document.getElementById('maxMoviments').value;
    let resultat = NoHaAcabat;
    let currentPlayerManager = 0;

    
    
    playerManagers[currentPlayerManager].manageTorn(inicial);
}