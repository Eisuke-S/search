// script.js
const gameBoard = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
let score = 0;
let gameOver = false;

function createBlock() {
  if (!gameOver) {
    const block = document.createElement('div');
    block.classList.add('block');
    const size = Math.floor(Math.random() * 40) + 20; // Random size between 20 and 60
    const xPos = Math.floor(Math.random() * (200 - size));
    block.style.cssText = `width: ${size}px; height: ${size}px; left: ${xPos}px;`;
    block.style.backgroundColor = getRandomColor();
    gameBoard.appendChild(block);

    moveBlock(block);
  }
}

function moveBlock(block) {
  let position = 0;
  const speed = 5;

  function fall() {
    position += speed;
    block.style.top = `${position}px`;

    if (position < 400 && !gameOver) {
      requestAnimationFrame(fall);
    } else {
      if (position >= 360) {
        checkGameOver(block);
        setTimeout(() => {
          block.remove();
          createBlock(); // Generate a new block after the current one reaches the bottom
        }, 0);
      }
    }
  }

  block.addEventListener('click', () => {
    block.remove();
    score += calculateScore();
    updateScore();
  });

  fall();
}

function updateScore() {
  scoreDisplay.textContent = `Score: ${score.toFixed(2)}`;
}

function checkGameOver(block) {
  const topLine = 50; // Adjust the top line position as needed
  const blockBottom = block.offsetTop + block.offsetHeight;
  if (blockBottom >= topLine) {
    gameOver = true;
    console.log('Game Over!');
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function calculateScore() {
  const baseScore = 10;
  const multiplier = 1.1;

  if (score === 0) {
    return baseScore;
  } else {
    return baseScore * Math.pow(multiplier, Math.floor(score / baseScore));
  }
}

setInterval(createBlock, 1000);
