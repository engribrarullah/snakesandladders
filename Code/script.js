
var snakes = {
  30: 7,
  56: 19,
  47: 15,
  56: 19,
  73: 51,
  82: 42,
  92: 75,
  98: 55
};

var ladders = {
  4: 25,
  21: 39,
  29: 74,
  43: 76,
  63: 80,
  71: 89
};
var currentPlayer = 1; 
var playerPositions = [0, 0]; 
function rollDice() {
  //Where we roll dice
  var diceValue = Math.floor(Math.random() * 6) + 1;
  var diceElement = document.getElementById('player' + currentPlayer);
  diceElement.innerText = diceValue;
  //Where we move player token
  movePlayer(currentPlayer, diceValue);
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
  }
function movePlayer(player, steps) {
  var currentPosition = playerPositions[player - 1];
  var newPosition = currentPosition + steps;

  if (newPosition <= 100) {
    newPosition = snakeandladdercheck(newPosition);
    playerPositions[player - 1] = newPosition;

    var cell = document.getElementById('rc' + currentPosition);
    cell.classList.remove('token-player' + player);

    cell = document.getElementById('rc' + newPosition);
    cell.classList.add('token-player' + player);

    checkWin(player, newPosition);
  }
}

function snakeandladdercheck(position) {
  if (snakes[position]) {
    return snakes[position];
  } else if (ladders[position]) {
    return ladders[position];
  }
  return position;
}

function checkWin(player, position) {
  if (position === 100) {
    alert('Player ' + player + ' wins!');
    const button = document.querySelector('.roll-button');
    button.disabled = true;
  }
  
}