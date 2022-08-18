import { playerMoveName, playerPhysicalDmg, playerMagicDmg, playerPhysicArmorPercents, playerMagicArmorPercents, btnMovesArr, btnFight, playerMovesArr } from "./exportConstants.js";
import { mountingBtnPlayer } from "./gameJointLogic.js";
import { player } from "./persons.js";

const playerBlock = document.getElementById('player-moves');

function showPlayerMove(value) {
  playerMoveName.innerText = player.moves[value].name;
  playerPhysicalDmg.innerText = player.moves[value].physicalDmg;
  playerMagicDmg.innerText = player.moves[value].magicDmg;
  playerPhysicArmorPercents.innerText = player.moves[value].physicArmorPercents;
  playerMagicArmorPercents.innerText = player.moves[value].magicArmorPercents;
}

export function startPlayerCooldown() {
  playerMovesArr.forEach((item, index) => {
    item.innerText = 0;
    btnMovesArr[index].setAttribute('disabled', true)
  });
}

export function playerMovesCount(playerMove) {  
  playerMovesArr.forEach((item, index) => {
    if(Number(item.childNodes[0].nodeValue) === 0) {
      item.innerText = 0;
    } else if (Number(item.childNodes[0].nodeValue) > 0) {
      item.innerText = Number(item.childNodes[0].nodeValue) - 1;
    } else {
      item.innerText = player.moves[index].cooldown;
    }
  })
  
  showPlayerMove(playerMove);
  mountingBtnPlayer();
}

playerBlock.addEventListener('click', evt => {
  if (evt.target.tagName != 'BUTTON') return
  let playerMove = btnMovesArr.findIndex(item => {
    if (item == evt.target) {
      return true
    }
  })  
  playerMovesArr[playerMove].innerText = -1;
  playerMovesCount(playerMove);
  btnMovesArr.forEach(item => item.setAttribute('disabled', true));
  btnFight.removeAttribute('disabled');
})