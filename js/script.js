function playGame (playerInput) {
clearMessages();
// computerMove
function getMoveName(argMoveId){
    if(argMoveId == 1){
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
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

//playerMove
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

//score
function displayResult(argComputerMove, argPlayerMove){
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Niestety tym razem przegrałeś');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Niestety tym razem przegrałeś');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Niestety tym razem przegrałeś');
    } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis');
    } else if (argPlayerMove == 'nieznany ruch') {
        printMessage('Nieznany ruch. Wpisz 1: kamień, 2: papier lub 3: nożyce');
    }
}

displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });