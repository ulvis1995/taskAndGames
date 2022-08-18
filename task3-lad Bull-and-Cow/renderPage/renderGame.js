import { gameBlock, difficultyBlock } from "../functionsAndConstants/exportsConstants.js";

const amountX = document.getElementById('X-amount');

export default function renderGame (difficultyLevel) {
  difficultyBlock.classList.add('unvisible')
  gameBlock.classList.remove('unvisible')
  
  while (amountX.firstChild) {
    amountX.removeChild(amountX.firstChild);
  }

  for (let i=0; i<difficultyLevel; i++ ) {
    const img = document.createElement(`img`)
    img.src='./img/free-icon-close-1828665.png'
    amountX.append(img)
  }
}
