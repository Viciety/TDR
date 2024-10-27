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
            let MaterialAdvantatgeScorerBlanc = document.getElementById('blancScorerChoice2');
            let MovmentScorerBlanc = document.getElementById('blancScorerChoice3');


            if (MaterialAdvantatgeScorerBlanc.checked){
                scorers.push(new Array(new MaterialAdvantatgeScorer(), 1))
            }
            if (MovmentScorerBlanc.checked){
                scorers.push(new Array(new MovmentScorer(), 1))
            }

            let composed = new ComposedScorer(new CheckmateScorer, scorers);
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
            let MaterialAdvantatgeScorerNegre = document.getElementById('negreScorerChoice2');
            let MovmentScorerNegre = document.getElementById('negreScorerChoice3');

            if (MaterialAdvantatgeScorerNegre.checked){
                scorers.push(new Array(new MaterialAdvantatgeScorer(), 1));
            }
            if (MovmentScorerNegre.checked){
                scorers.push(new Array(new MovmentScorer(), 1))
            }

            let composed = new ComposedScorer(new CheckmateScorer, scorers);
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