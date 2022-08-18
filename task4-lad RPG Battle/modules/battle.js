import {enemyHealthValue, playerHealthValue, enemyMoveName, playerMoveName, btnFight, btnEnemyMove } from "./exportConstants.js";
import { clearBattleBlock, damageCalcutation, checkEndGame } from "./gameJointLogic.js";
import { player, monster } from "./persons.js";

export function battle() {
  let playerMoveIndex = player.moves.findIndex(item=> {
    if (item.name == playerMoveName.childNodes[0].nodeValue) {
      return true
    }
  });
  let enemyMoveIndex = monster.moves.findIndex(item => {
    if (item.name == enemyMoveName.childNodes[0].nodeValue) {
      return true
    }
  });
  let playerMoveObject = player.moves[playerMoveIndex];
  let enemyMoveObject = monster.moves[enemyMoveIndex];

  damageCalcutation (enemyMoveObject, playerMoveObject);
  clearBattleBlock ();
  btnFight.setAttribute('disabled', true);
  if (playerHealthValue.childNodes[0].nodeValue == 0 || enemyHealthValue.childNodes[0].nodeValue == 0) {
    checkEndGame();
  } else {
    btnEnemyMove.removeAttribute('disabled');
  }
}
