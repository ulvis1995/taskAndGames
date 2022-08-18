import { renderAnswer } from "../renderPage/renderAnswer.js";
import { ANSWER, inputNumber  } from "./exportsConstants.js";

export function setPlayerVersion(generatedArr, numberOfAttempts) {
  let variant = inputNumber.value
  let variantArr = variant.split('').map(item=> Number(item))
  let comparisonBull = generatedArr.reduce((sum, current, index) => {
    current === variantArr[index] ? sum++ : sum
    return sum
  }, 0)

  let comparisonCow = generatedArr.reduce((sum, current) => {
    variantArr.includes(current) ? sum++ : sum
    return sum
  }, 0)

  let answer = {
    variant: variant,
    bull: comparisonBull,
    cow: comparisonCow - comparisonBull
  }
  ANSWER.push(answer)
  renderAnswer (generatedArr, numberOfAttempts)
  inputNumber.value = ''
}