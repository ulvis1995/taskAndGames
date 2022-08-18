import { enemyMoveName, enemyPhysicalDmg, enemyMagicDmg, enemyPhysicArmorPercents, enemyMagicArmorPercents, btnEnemyMove } from "./exportConstants.js";
import { mountingBtnPlayer } from "./gameJointLogic.js";
import { monster } from "./persons.js";

const enemyMove1 = document.getElementById("enemy-move-1");
const enemyMove2 = document.getElementById("enemy-move-2");
const enemyMove3 = document.getElementById("enemy-move-3");
const enemyMovesArr = [enemyMove1, enemyMove2, enemyMove3];
const enemyMovesList = [];
let enemyMoveNow;

function showEnemyMove(value) {
  enemyMoveName.innerText = monster.moves[value].name;
  enemyPhysicalDmg.innerText = monster.moves[value].physicalDmg;
  enemyMagicDmg.innerText = monster.moves[value].magicDmg;
  enemyPhysicArmorPercents.innerText = monster.moves[value].physicArmorPercents;
  enemyMagicArmorPercents.innerText = monster.moves[value].magicArmorPercents;
}

export function startEnemyCooldown() {
  enemyMovesArr.forEach(item => {
    item.innerText = 0
  })
}

export function enemyMovesCount() {  
  enemyMovesArr.forEach((item, index) => {
    if(Number(item.childNodes[0].nodeValue) === 0) {
      item.innerText = 0;
      enemyMovesList.push(index);
      let enemyMoveNowInd = Math.floor(Math.random() * (enemyMovesList.length - 0)) + 0;
      enemyMoveNow = enemyMovesList[enemyMoveNowInd];
      showEnemyMove(enemyMoveNow);
    } else if (Number(item.childNodes[0].nodeValue) > 0) {
      item.innerText = Number(item.childNodes[0].nodeValue) - 1;
    } else {
      item.innerText = monster.moves[index].cooldown;
    }
  })
  mountingBtnPlayer()
  btnEnemyMove.setAttribute('disabled', true);
}


btnEnemyMove.addEventListener('click', () => {
  enemyMovesCount();
  enemyMovesArr[enemyMoveNow].innerText = monster.moves[enemyMoveNow].cooldown;
  enemyMovesList.length = 0;
})