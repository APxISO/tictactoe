let gameBoard;
const p1 = "X";
const p2 = "O";
let currentPlayer = p1;
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
  ];  




let squares = document.querySelectorAll(".cell");

startGame();

function startGame() {
  currentPlayer = p1;
  gameBoard = Array.from(Array(9).keys())
    for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
    squares[i].addEventListener("click", playerClick, false )
  }
  }
  
  function playerClick(mark) {
    playerTurn(mark.target.id)
  }

  function playerTurn(squareId) {
    let square = document.getElementById(squareId)
    if (square.innerText === p1 || square.innerText === p2){
      return
    }
    gameBoard[squareId] = currentPlayer;
    square.innerText = currentPlayer;
    let gameWon = checkWin(gameBoard, currentPlayer)
    if (gameWon) gameOver(currentPlayer)
    else currentPlayer = (currentPlayer == p1) ? p2 : p1
    }

function checkWin(gameBoard, currentPlayer) {
for (let i = 0; i < winningCombos.length; i++) {
  const winningComboFirstNum = winningCombos[i][0];
  const winningComboSecondNum = winningCombos[i][1];
  const winningComboThirdNum = winningCombos[i][2];
  console.log(gameBoard[winningComboFirstNum])
  if (
    gameBoard[winningComboFirstNum] === currentPlayer &&
    gameBoard[winningComboSecondNum] === currentPlayer &&
    gameBoard[winningComboThirdNum] === currentPlayer
    ) {
    return true;
  }
}
 return false;
}

function gameOver(currentPlayer) {
  console.log(currentPlayer)
  alert (currentPlayer + " is the winner!");
}

