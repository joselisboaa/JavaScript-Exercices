const board = (() =>{
  const gameArray = ['','','','','','','','',''];

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

  const PLAYER_ONE = 'X'

  let gameActive = true;

  return {gameArray, possibilities, gameActive, PLAYER_ONE};
})(); 

const emptySquare = (square) => {
  if(square.innerText === ''){
    return true;
  }
  return false;
}

const changePlayer = () => {
  board.PLAYER_ONE = board.PLAYER_ONE === 'X' ? 'O' : 'X'
}

const validateThePlay = (index) => {
  board.gameArray[index] = board.PLAYER_ONE;

}

const ifWin = () => {
  for(let i = 0; i <= 7; i++){
    let win = board.possibilities[i];
    const a = board.gameArray[win[0]]
    const b = board.gameArray[win[1]]
    const c = board.gameArray[win[2]]

    if(a === '' || b === '' || c === ''){
      continue;
    }
    if(a === b && b === c){
      board.gameActive = false;      
    }
  }
}

const winner = () => {
  if(board.gameActive === false){
    let container = document.querySelector('.container');
    container.classList.remove('inGame');

    let playerWinner = document.querySelector('.result');
    playerWinner.textContent = `${board.PLAYER_ONE} \n venceu`;
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