export function generateArray(num) {
  let arr = [...new Set (String( Math.floor(Math.random()*10e20)).split(''))]
  let numberList = arr.map (item => Number(item))
  let computedArr = numberList.slice(0,num)
  return computedArr 
}

export function generateAttempts(num) {
  switch (num) {
    case '3':
      return 8
    case '4':
      return 10
    case '5':
      return 15
    case '6':
      return 20
    default:
      break;
  }
}