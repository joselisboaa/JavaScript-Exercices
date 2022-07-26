const board = (() =>{
  const gameArray = ['','','','','','','','',''];

  let container = document.querySelector('.container');
  let playerWinner = document.querySelector('.result');

  const possibilities = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

<<<<<<< HEAD
  const PLAYER_ONE = 'X';
=======
  const PLAYER_ONE = 'X'
>>>>>>> adc93baee8ca5ab86fe25d3402821d34f0c47283

  let gameActive = true;

  return {gameArray, possibilities, gameActive, PLAYER_ONE, playerWinner, container};
})(); 

const emptySquare = (square) => {
  if(square.innerText === ''){
    return true;
  }
  return false;
}

const changePlayer = () => {
<<<<<<< HEAD
  board.PLAYER_ONE = board.PLAYER_ONE === 'X' ? 'O' : 'X';
=======
  board.PLAYER_ONE = board.PLAYER_ONE === 'X' ? 'O' : 'X'
>>>>>>> adc93baee8ca5ab86fe25d3402821d34f0c47283
}

const validateThePlay = (index) => {
  board.gameArray[index] = board.PLAYER_ONE;
}

const ifWin = () => {
  for(let i = 0; i <= 7; i++){
    let win = board.possibilities[i];
<<<<<<< HEAD
    const a = board.gameArray[win[0]];
    const b = board.gameArray[win[1]];
    const c = board.gameArray[win[2]];
=======
    const a = board.gameArray[win[0]]
    const b = board.gameArray[win[1]]
    const c = board.gameArray[win[2]]
>>>>>>> adc93baee8ca5ab86fe25d3402821d34f0c47283

    if(a === '' || b === '' || c === ''){
      continue;
    }
    if(a === b && b === c){
      board.gameActive = false;      
    }
  }
  if(!board.gameArray.includes('')){
    board.container.classList.remove('inGame');
    board.playerWinner.textContent = 'TIE';
  }
}

const winner = () => {
  if(board.gameActive === false){
    board.container.classList.remove('inGame');

    board.playerWinner.textContent = `${board.PLAYER_ONE} \n venceu`;
  }
}

const move = (square, index) => {
  if(emptySquare(square) && board.gameActive){
    square.innerText = board.PLAYER_ONE;
    validateThePlay(index);
    ifWin();
    winner();
    changePlayer();
  }
}

const tictac = () => {
  const spaces = Array.from(document.querySelectorAll('.square'));
  spaces.forEach( (square, index) => {
    square.addEventListener('click', () => move(square, index));
  })
}
tictac();