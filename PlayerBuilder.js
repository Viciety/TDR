function BuildPlayers(crida){

    let PlayerBlanc = document.getElementById("playerblanc").value;
    let WorkerBlanc;

    if (PlayerBlanc == 'Player'){
        document.write("jugador blanc")
    
    }else if (PlayerBlanc == 'Engine'){
        let botblanc = document.getElementById("blancChoice1").value;

        if (botblanc == 'random'){
            WorkerBlanc = new WorkerPlayerManager(crida, BLANC, new RandomMoveChooser());

        }else{
            let scorers = new Array ();
            let depthBlanc = document.getElementById('blancDepth').value;
            let CheckmateScorerBlanc = document.getElementById('blancScorerChoice1').value;
            let MaterialAdvantatgeScorerBlanc = document.getElementById('blancScorerChoice2').value;

            if (CheckmateScorerBlanc == added){
                scorers.push(new Array(new CheckmateScorer(), 1))
            }

            if (MaterialAdvantatgeScorerBlanc == added){
                scorers.push(new Array(new MaterialAdvantatgeScorer(), 1))
            }

            let composed = new ComposedScorer(scorers);
            let deepScorer = new DeepScorer(depthBlanc, composed);
            let MoveChooserBlanc = new ScoreMoveChooser(deepScorer);
            WorkerBlanc = new WorkerPlayerManager(crida,BLANC,MoveChooserBlanc)


        }
    }else{

        throw "Error en el valor del select blanc"
    }

    let PlayerNegre = document.getElementById("playernegre").value;
    let WorkerNegre;

    if (PlayerNegre == 'Player'){
        document.write("jugador negre");

    }else if (PlayerNegre == 'Engine'){
        let botnegre = document.getElementById("negreChoice1").value;

        if (botnegre == 'random'){
            WorkerNegre = new WorkerPlayerManager(crida, NEGRE, new RandomMoveChooser());

        }else{
            let scorers = new Array ();
            let depthNegre = document.getElementById('negreDepth');
            let CheckmateScorerNegre = document.getElementById('negreScorerChoice1').value;
            let MaterialAdvantatgeScorerNegre = document.getElementById('negreScorerChoice2');

            if (CheckmateScorerNegre == added){
                scorers.push(new Array(new CheckmateScorer(), 1));
            }

            if (MaterialAdvantatgeScorerNegre == added){
                scorers.push(new Array(new MaterialAdvantatgeScorer(), 1));
            }

            let composed = new ComposedScorer(scorers);
            let deepScorer = new DeepScorer(depthNegre, composed);
            let MoveChooserNegre = new ScoreMoveChooser(deepScorer);
            WorkerNegre = new WorkerPlayerManager(crida,NEGRE,MoveChooserNegre);

        }

    }else{

        throw "Error en el valor del select negre"
    }
    
    let playerManagers = new Array();
    playerManagers.push(WorkerBlanc);
    playerManagers.push(WorkerNegre);    

    return playerManagers;
}