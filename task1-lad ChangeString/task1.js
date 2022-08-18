'use strict';

const daysWeek = [
  {Ru: 'ПОНЕДЕЛЬНИК', En: 'MONDAY'},
  {Ru: 'ВТОРНИК', En: 'TUESDAY'},
  {Ru: 'СРЕДА', En: 'WEDNESDAY'},
  {Ru: 'ЧЕТВЕРГ', En: 'THURSDAY'},
  {Ru: 'ПЯТНИЦА', En: 'FRIDAY'},
  {Ru: 'СУББОТА', En: 'SATURDAY'},
  {Ru: 'ВОСКРЕСЕНЬЕ', En: 'SUNDAY'}
]

let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;

// Решение в "лоб"
// function days(string, week) {
//   for (let i=0; i<week.length; i++) {
//     let arr = string.split( week[i].Ru)
//     arr.splice(1,0, week[i].En)
//     string = arr.join('')
//   }
//   return string
// }

// days (str, daysWeek)
// console.log(days (str, daysWeek))

function perlaceWord(string, week) {
  for (let i=0; i<week.length; i++) {
    if (week[i].Ru) {
      let dayStart = string.toLowerCase().indexOf(week[i].Ru.toLowerCase())
      let day = string.slice(dayStart, dayStart + week[i].Ru.length)
      let arr = string.split(day)
      arr.splice(1,0, week[i].En.toUpperCase())
      string = arr.join('')
    }    
  }  
  return string
}



perlaceWord (str, daysWeek)
console.log(perlaceWord (str, daysWeek))
