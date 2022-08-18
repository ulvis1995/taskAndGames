import { compBlock, attemptsList, inputBlock, resultBlock, ANSWER, inputNumber, warning, winScore, remainingNumber } from "../functionsAndConstants/exportsConstants.js";

const resultFrace = document.getElementById('you-result')

export function renderAnswer(generatedArr, numberOfAttempts) {   
  remainingNumber.innerText = `Осталось попыток: ${numberOfAttempts - ANSWER.length}`
  let number = generatedArr.join('')

  if (inputNumber.value === number) {
    inputBlock.classList.add('unvisible')
    warning.classList.add('unvisible')
    compBlock.classList.add('unvisible')
    resultBlock.classList.remove('unvisible')
    resultFrace.innerText = 'Вы выиграли' 
    winScore.innerText = `Количество ходов: ${ANSWER.length}`
    remainingNumber.classList.add('unvisible')
  }  
  if (numberOfAttempts - ANSWER.length === 0 && inputNumber.value !== number) {
    inputBlock.classList.add('unvisible')
    warning.classList.add('unvisible')
    compBlock.classList.add('unvisible')
    resultBlock.classList.remove('unvisible')
    winScore.classList.add('unvisible')
    resultFrace.innerText = 'Вы проиграли' 
    remainingNumber.classList.add('unvisible')
  }

  while (attemptsList.firstChild) {
      attemptsList.removeChild(attemptsList.firstChild);
  }
  if (ANSWER.length !== 0) {
    const gameHeader = document.createElement('div')
    const pNum = document.createElement('p')
    pNum.innerText = 'Ваше число'
    pNum.style.width='77.5px'
    const pBull = document.createElement('p')
    pBull.innerText = 'Быки'
    pBull.style.width='33.2px'
    const pCow = document.createElement('p')
    pCow.innerText = 'Коровы'
    pCow.style.width='49px'
    gameHeader.classList.add('game-try-item')
    attemptsList.appendChild(gameHeader).append(pNum, pBull, pCow)


    ANSWER.forEach(item => {
      const divRes = document.createElement('div')
      divRes.classList.add('game-try-item')
      const pNum = document.createElement('p')
      pNum.innerText = item.variant
      pNum.style.width='77.5px'
      const pBull = document.createElement('p')
      pBull.innerText = item.bull
      pBull.style.width='33.2px'
      const pCow = document.createElement('p')
      pCow.innerText = item.cow
      pCow.style.width='49px'
      divRes.append(pNum, pBull, pCow)
      attemptsList.append(divRes)
    })

  }  
  attemptsList.appendChild(remainingNumber)

};