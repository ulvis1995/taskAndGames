import { playerHealthValue, enemyHealthValue, btnFight, 
  btnEnd, endBlock, btnEnemyMove } from './modules/exportConstants.js';
import { battle } from './modules/battle.js';
import { startEnemyCooldown } from './modules/enemyMove.js';
import {setHealthPlayer, displayEnemyHealth, displayPlayerHealth} from './modules/gameJointLogic.js'
import { startPlayerCooldown } from './modules/playerMove.js';
import { monster } from './modules/persons.js';

const btnStart = document.getElementById('btn-start');
const blockStart = document.getElementById('difficulty-block');
const blockGame = document.getElementById('game-block');

function init() {
  function setDifficultAndStart () {
    blockStart.classList.add('unvisible')
    blockGame.classList.remove('unvisible')
    let difficultyLevel = form.elements['difficulty'].value
    let playerHealth = setHealthPlayer(difficultyLevel)
    playerHealthValue.innerText = playerHealth
    enemyHealthValue.innerText = monster.maxHealth
    displayEnemyHealth(10)
    displayPlayerHealth(playerHealth)
    startEnemyCooldown()
    startPlayerCooldown()
    btnFight.setAttribute('disabled', true)
  }

  function newGame() {
    endBlock.classList.add('unvisible');
    btnEnemyMove.removeAttribute('disabled');
    blockStart.classList.remove('unvisible');
    blockGame.classList.add('unvisible');
  }

  btnStart.addEventListener('click', () => setDifficultAndStart());
  btnFight.addEventListener('click', () => battle());
  btnEnd.addEventListener('click', () => newGame());
}



document.addEventListener("DOMContentLoaded", init);