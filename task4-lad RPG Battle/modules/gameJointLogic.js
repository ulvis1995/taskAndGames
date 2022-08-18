import { enemyHealthValue, playerHealthValue, enemyMoveName, enemyPhysicalDmg, enemyMagicDmg, enemyPhysicArmorPercents, enemyMagicArmorPercents, playerMoveName, playerPhysicalDmg, playerMagicDmg, playerPhysicArmorPercents, playerMagicArmorPercents, btnMovesArr, playerMovesArr, endFrace, btnEnd, endBlock, enemyHealthPic, playerHealthPic } from "./exportConstants.js";

export function setHealthPlayer(value) {
  switch (value) {
    case 'Легко':
      return 30
    case 'Средне':
      return 25
    case 'Сложно':
      return 20
    default:
      break;
  }
}

export function displayEnemyHealth(value) {
  while (enemyHealthPic.firstChild) {
    enemyHealthPic.removeChild(enemyHealthPic.firstChild);
  };

  for (let i=0; i<value; i++ ) {
    const img = document.createElement(`img`)
    img.src='./img/stop.jpg'
    enemyHealthPic.append(img)
  };
}

export function displayPlayerHealth(value) {
  while (playerHealthPic.firstChild) {
    playerHealthPic.removeChild(playerHealthPic.firstChild);
  };

  for (let i=0; i<value; i++ ) {
    const img = document.createElement(`img`)
    img.src='./img/stop.jpg'
    playerHealthPic.append(img)
  };
}

export function damageCalcutation (enemyMoveObject, playerMoveObject) {
  enemyMoveObject.physicArmorPercents - playerMoveObject.physicalDmg > 0 
  ? enemyHealthValue.innerText = enemyHealthValue.childNodes[0].nodeValue
  : enemyHealthValue.innerText = enemyHealthValue.childNodes[0].nodeValue - playerMoveObject.physicalDmg

  enemyMoveObject.magicArmorPercents - playerMoveObject.magicDmg > 0 
  ? enemyHealthValue.innerText = enemyHealthValue.childNodes[0].nodeValue
  : enemyHealthValue.innerText = enemyHealthValue.childNodes[0].nodeValue - playerMoveObject.magicDmg

  playerMoveObject.physicArmorPercents - enemyMoveObject.physicalDmg  > 0 
  ? playerHealthValue.innerText = playerHealthValue.childNodes[0].nodeValue
  : playerHealthValue.innerText = playerHealthValue.childNodes[0].nodeValue - enemyMoveObject.physicalDmg 

  playerMoveObject.magicArmorPercents - enemyMoveObject.magicDmg > 0 
  ? playerHealthValue.innerText = playerHealthValue.childNodes[0].nodeValue
  : playerHealthValue.innerText = playerHealthValue.childNodes[0].nodeValue - enemyMoveObject.magicDmg

  if (playerHealthValue.innerText < 0) {
    playerHealthValue.innerText = 0
  }

  if (enemyHealthValue.innerText < 0) {
    enemyHealthValue.innerText = 0
  }
  displayEnemyHealth(enemyHealthValue.childNodes[0].nodeValue);
  displayPlayerHealth (playerHealthValue.childNodes[0].nodeValue);
}

export function clearBattleBlock() {  
  enemyMoveName.innerText = '';
  enemyPhysicalDmg.innerText = '';
  enemyMagicDmg.innerText = '';
  enemyPhysicArmorPercents.innerText = '';
  enemyMagicArmorPercents.innerText = '';
  
  playerMoveName.innerText = '';
  playerPhysicalDmg.innerText = '';
  playerMagicDmg.innerText = '';
  playerPhysicArmorPercents.innerText = '';
  playerMagicArmorPercents.innerText = '';
}

export function mountingBtnPlayer() {
  btnMovesArr.forEach((item, index) => {
    if (Number(playerMovesArr[index].childNodes[0].nodeValue) === 0) {
      item.removeAttribute('disabled')
    } else {
      item.setAttribute('disabled', true)
    }
  });
}

export function checkEndGame() {
  endBlock.classList.remove('unvisible')
  if (playerHealthValue.childNodes[0].nodeValue == 0) {
    endFrace.innerText = 'Но Лютый победил'
    btnEnd.innerText = 'Попробовать снова'
  } else if (enemyHealthValue.childNodes[0].nodeValue == 0) {
    endFrace.innerText = 'Вы победили'
    btnEnd.innerText = 'Новая игра'
  }
}