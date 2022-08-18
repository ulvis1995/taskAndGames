import { warning } from "./exportsConstants.js";

export function checkingInputLength(difficultyLeve) {
  while (warning.firstChild) {
      warning.removeChild(warning.firstChild);
  }
    const paragraf = document.createElement('p')
    paragraf.innerText = `*Введите ${difficultyLeve}-значное число!`
    warning.append(paragraf)
}

export function checkingInputDoublingNumber() {
  while (warning.firstChild) {
    warning.removeChild(warning.firstChild);
  }
    const paragraf = document.createElement('p')
    paragraf.innerText = `*Цифры не должны повторяться`
    warning.append(paragraf)
}

export function checkingSuccessful() {
  while (warning.firstChild) {
    warning.removeChild(warning.firstChild);
  }
    const paragraf = document.createElement('p')
    paragraf.innerText = ``
    warning.append(paragraf)
}