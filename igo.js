const board = document.getElementById('board');
const boardSize = 19;
let currentPlayer = 'black';

function createBoard() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('stone');
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.addEventListener('click', handleStoneClick);
      board.appendChild(cell);
    }
  }
}

function handleStoneClick(event) {
  const { row, col } = event.target.dataset;
  if (isValidMove(row, col)) {
    placeStone(row, col);
    if (checkWin(row, col)) {
      alert(`${currentPlayer.toUpperCase()}の勝利！`);
      resetGame();
    } else {
      switchPlayer();
      computerMove();
    }
  } else {
    alert('無効な手です。もう一度選択してください。');
  }
}

function isValidMove(row, col) {
  // 石がすでに置かれていないか確認するロジック
  // 他のルールに従って条件を追加することも可能
  return true;
}

function placeStone(row, col) {
  const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
  const stone = document.createElement('div');
  stone.classList.add('stone', currentPlayer);
  cell.appendChild(stone);
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
}

function computerMove() {
  // コンピューターの手を決定するロジックを追加
  // ここではランダムに手を選んでいますが、より高度なアルゴリズムを実装することができます。
  const randomRow = Math.floor(Math.random() * boardSize);
  const randomCol = Math.floor(Math.random() * boardSize);

  if (isValidMove(randomRow, randomCol)) {
    placeStone(randomRow, randomCol);
    if (checkWin(randomRow, randomCol)) {
      alert(`${currentPlayer.toUpperCase()}の勝利！`);
      resetGame();
    } else {
      switchPlayer();
    }
  } else {
    computerMove(); // 無効な手の場合は再度コンピューターに手を選ばせる
  }
}

function checkWin(row, col) {
  // 勝利条件のチェックを実装
  // 例: 5つ連続の石があるかどうかを確認するロジックなど
  return false;
}

function resetGame() {
  // ゲームをリセットするロジックを実装
  // 石のクリア、プレイヤーの初期化など
}

createBoard();
