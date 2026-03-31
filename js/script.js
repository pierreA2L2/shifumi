const aPossibleResults = [
    ['feuille', 'pierre', 'ciseaux'],
    ['ciseaux', 'feuille', 'pierre'],
    ['pierre', 'ciseaux', 'feuille']
];
const imgGameComputer = document.querySelector('#gameComputer');
const h2Msg = document.querySelector('#resultGame');
const h3Score = document.querySelector('#score');

const btnPierre = document.querySelector('#pierre');
const btnFeuille = document.querySelector('#feuille');
const btnCiseaux = document.querySelector('#ciseaux');

let scoreHuman = 0;
let scoreComputer = 0;

let aMessages = ['Tu as perdu !', 'Match nul !', 'Tu as gagné !']

/**
 * game() 
 * @param {number} tirage 
 */
const game = (tirage) => {
    let rndResult = Math.floor(Math.random()*3);
    let gameResult = aPossibleResults[tirage][rndResult];
    imgGameComputer.src = `../img/${gameResult}.png`;
    h2Msg.textContent = aMessages[rndResult];
    if(rndResult === 2 ){
        scoreHuman++;
    }
    if(rndResult === 0 ){
        scoreComputer++;
    }
    h3Score.textContent = `Score : ${scoreHuman} - ${scoreComputer}`;
    
}

btnPierre.addEventListener('click', () => game(0));
btnFeuille.addEventListener('click', () => game(1));
btnCiseaux.addEventListener('click', () => game(2));


