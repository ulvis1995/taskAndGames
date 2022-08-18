import renderGame from "./renderPage/renderGame.js";
import { checkingInputLength, checkingInputDoublingNumber, checkingSuccessful} from "./functionsAndConstants/functionsInput.js";
import {setPlayerVersion } from "./functionsAndConstants/getValue.js"
import { renderAnswer } from "./renderPage/renderAnswer.js";
import { generateArray, generateAttempts } from "./functionsAndConstants/function.js";
import { inputNumber, difficultyBlock, gameBlock, inputBlock, compBlock, resultBlock, ANSWER, warning, winScore, remainingNumber } from "./functionsAndConstants/exportsConstants.js";

let difficultyLevel, generatedArr, numberOfAttempts
const form = document.getElementById('form');
const btnStart = document.getElementById('btn-start');
const btnNewGame = document.getElementById('btn-new-game');
const btnInput = document.getElementById('btn-try-to-guess');
const btnRulesToOpen = document.getElementById('btn-rules-to-open');
const btnRulesToClose = document.getElementById('btn-rules-to-close');
const rulesShow = document.getElementById('rules-open');
const rulesClose = document.getElementById('rules-closed');

function init() {  

  function setDifficultyLevel() {
    difficultyLevel = form.elements['difficulty'].value
    generatedArr = generateArray(difficultyLevel)
    numberOfAttempts = generateAttempts(difficultyLevel)
    renderGame (difficultyLevel)
    renderAnswer(generatedArr, numberOfAttempts)
  }
  
  function startNewGame() {
      difficultyBlock.classList.remove('unvisible')
      gameBlock.classList.add('unvisible')
      inputBlock.classList.remove('unvisible')
      warning.classList.remove('unvisible')
      compBlock.classList.remove('unvisible')
      resultBlock.classList.add('unvisible')
      winScore.classList.remove('unvisible')
      remainingNumber.classList.remove('unvisible')
      ANSWER.length = 0
      console.log(ANSWER)
  }

  btnRulesToOpen.addEventListener('click', () => {
    rulesShow.classList.remove('unvisible')
    rulesClose.classList.add('unvisible')
  })
  btnRulesToClose.addEventListener('click', () => {
    rulesShow.classList.add('unvisible')
    rulesClose.classList.remove('unvisible')
  })

  btnStart.addEventListener('click', () => setDifficultyLevel())
  btnNewGame.addEventListener('click', () => startNewGame())

  btnInput.addEventListener('click',  () => {
    if (inputNumber.value.length !== Number(difficultyLevel)) {
      checkingInputLength (difficultyLevel)
    } else if ([...new Set (String(inputNumber.value).split(''))].length !==Number(difficultyLevel)) {
      checkingInputDoublingNumber ()
    } else {
      checkingSuccessful()
      setPlayerVersion(generatedArr, numberOfAttempts)
    }
  })  
}

document.addEventListener("DOMContentLoaded", init);