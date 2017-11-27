const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex++){
    const row = [];
    for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex++){
    const row = [];
    for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while(numberOfBombsPlaced < numberOfBombs){
    const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = "B";
    numberOfBombsPlaced++;
  }

  return board;
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

//console.log(generatePlayerBoard(3,3));
const playerBoard = generatePlayerBoard(3,4);
//console.log(generateBombBoard(3,3,2));
const bombBoard = generateBombBoard(3,4,5);
console.log('Player Board:')
printBoard(playerBoard);
console.log('Bomb Board:')
printBoard(bombBoard)