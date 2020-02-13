// Global variables
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const printResult = document.getElementById('print-result');
const score = document.getElementById('score');
const round = document.getElementById('game-round');

let gameRound = 0;
let playerScore = 0;
let computerScore = 0;

// Have the computer make a random choice.
function computerChoice() {
  let randomizer = Math.floor(Math.random() * 3);
  switch (randomizer) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
  }
}

// Determine a winner of each round!
function playRound(player, computer) {
  if (player === 'rock' && computer === 'scissors') {
    printResult.innerHTML = `You win! Because ${player} beats ${computer}!`;
    playerScore++;
  } else if (player === 'rock' && computer === 'paper') {
    printResult.innerHTML = `You lose! Because ${computer} beats ${player}!`;
    computerScore++;
  } else if (player === 'paper' && computer === 'rock') {
    printResult.innerHTML = `You win! Because ${player} beats ${computer}!`;
    playerScore++;
  } else if (player === 'paper' && computer === 'scissors') {
    printResult.innerHTML = `You lose! Because ${computer} beats ${player}!`;
    computerScore++;
  } else if (player === 'scissors' && computer === 'paper') {
    printResult.innerHTML = `You win! Because ${player} beats ${computer}!`;
    playerScore++;
  } else if (player === 'scissors' && computer === 'rock') {
    printResult.innerHTML = `You lose! Because ${computer} beats ${player}!`;
    computerScore++;
  } else if (player === computer) {
    printResult.innerHTML = `It's a draw!`;
  }
}

function resetGame() {
  gameRound = 0;
  playerScore = 0;
  computerScore = 0;
  score.innerHTML = `PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
  round.innerHTML = `ROUND: ${gameRound}`;
  printResult.innerHTML = '';
}

function playGame() {
  gameRound++;
  player = this.id;
  computer = computerChoice();
  playRound(player, computer);
  round.innerHTML = `ROUND: ${gameRound}`;
  score.innerHTML = `PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
  if (playerScore === 5) {
    alert('Congratulations! You win the game!')
    resetGame();
  } else if (computerScore === 5) {
    alert('You lost the game. Better luck next time.')
    resetGame();
  }
}

rockBtn.addEventListener('click', playGame);
paperBtn.addEventListener('click', playGame);
scissorsBtn.addEventListener('click', playGame);