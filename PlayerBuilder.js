function BuildPlayers(crida){

    let PlayerBlanc = document.getElementById("playerblanc").value;
    let WorkerBlanc;

    if (PlayerBlanc == 'Player'){
        WorkerBlanc = new ManualPlayerManager(crida, BLANC)

    }else if (PlayerBlanc == 'Engine'){

        if(document.getElementById('blancChoice1').checked) {
            WorkerBlanc = new WorkerPlayerManager(crida, BLANC, new RandomMoveChooser());

        }else if (document.getElementById('blancChoice2').checked){
            let scorers = new Array ();
            let depthBlanc = document.getElementById('blancDepth').value;
            let CheckmateScorerBlanc = document.getElementById('blancScorerChoice1');
            let MaterialAdvantatgeScorerBlanc = document.getElementById('blancScorerChoice2');

            if (CheckmateScorerBlanc.checked){
                scorers.push(new Array(new CheckmateScorer(), 1))
            }

            if (MaterialAdvantatgeScorerBlanc.checked){
                scorers.push(new Array(new MaterialAdvantatgeScorer(), 1))
            }

            let composed = new ComposedScorer(scorers);
            let deepScorer = new DeepScorer(parseInt(depthBlanc), composed);
            let MoveChooserBlanc = new ScoreMoveChooser(deepScorer);
            WorkerBlanc = new WorkerPlayerManager(crida,BLANC,MoveChooserBlanc)
        }
    }else{

        throw "Error en el valor del select blanc"
    }

    let PlayerNegre = document.getElementById("playernegre").value;
    let WorkerNegre;

    if (PlayerNegre == 'Player'){
        WorkerNegre = new ManualPlayerManager(crida, NEGRE)

    }else if (PlayerNegre == 'Engine'){

        if(document.getElementById('negreChoice1').checked) {
            WorkerNegre = new WorkerPlayerManager(crida, NEGRE, new RandomMoveChooser());

        }else if (document.getElementById('negreChoice2').checked){
            let scorers = new Array ();
            let depthNegre = document.getElementById('negreDepth').value;
            let CheckmateScorerNegre = document.getElementById('negreScorerChoice1');
            let MaterialAdvantatgeScorerNegre = document.getElementById('negreScorerChoice2');

            if (CheckmateScorerNegre.checked){
                scorers.push(new Array(new CheckmateScorer(), 1));
            }

            if (MaterialAdvantatgeScorerNegre.checked){
                scorers.push(new Array(new MaterialAdvantatgeScorer(), 1));
            }

            let composed = new ComposedScorer(scorers);
            let deepScorer = new DeepScorer(parseInt(depthNegre), composed);
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