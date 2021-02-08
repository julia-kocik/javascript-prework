const result = {
    player: 0,
    computer: 0
};

const player = document.getElementById('player-score');
const computer = document.getElementById('computer-score');

player.innerHTML = result.player;
computer.innerHTML = result.computer;

function playGame(playerInput) {
    clearMessages();
    // computerMove
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    
    let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
    
    //playerMove
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove);
    console.log(result);
}

function getMoveName(argMoveId) {
    if(argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';  
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

//score
function displayResult(argComputerMove, argPlayerMove) {
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        showResults('player');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        showResults('computer');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        showResults('player');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        showResults('computer');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        showResults('player');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        showResults('computer');
    } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis');
    } else if (argPlayerMove == 'nieznany ruch') {
        printMessage('Nieznany ruch. Wpisz 1: kamień, 2: papier lub 3: nożyce');
    }
}

function showResults(winner) {
    if (winner === 'player') {
        result.player++;
        player.innerHTML = result.player;
        printMessage('Ty wygrywasz!')
    } else if (winner === 'computer') {
        result.computer++;
        computer.innerHTML = result.computer;
        printMessage('Niestety tym razem przegrałeś')
    }
}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});
