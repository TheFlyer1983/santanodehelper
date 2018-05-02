const fs = require('fs');

// Part 1 - What floow does Santa end up on

// My Solution

fs.readFile('./input.txt', (err, data) => {
  console.time('PartOne')
  if (err){
    console.log('Errroorrrrrr');
  }
  const floorsUp = data.toString().match(/\(/gi).length;
  const floorsDown = data.toString().match(/\)/gi).length;
  const floor = floorsUp - floorsDown;
  console.log('Final Floor:', floor);
  console.timeEnd('PartOne')
})

// Andrei's Solution

function question1() {
  fs.readFile('./input.txt', (err, data) => {
    console.time('Santa Time');
    const directions = data.toString();
    const directionsArray = directions.split('');
    const answer = directionsArray.reduce((acc, currentValue) => {
      if (currentValue === '('){
        return acc += 1
      } else if (currentValue === ')'){
        return acc -= 1
      }
    }, 0)
    console.timeEnd('Santa Time');
    console.log('Santa Floor:', answer);
  })
}
question1()

// Part 2 - When does Santa first enter the basement

// My Solution
fs.readFile('./input.txt', (err, data) => {
  console.time('PartTwo')
  if (err) {
    console.log('Errrrooooorrrr');
  }
  let count = 1;
  let basementPosition = '';
  for (var i = 0; i < data.length; i++) {
    // console.log(i, data.toString().charAt(i));
    if (data.toString().charAt(i) === '(') {
      basementPosition++
    } else {
      basementPosition--
    }
    if (basementPosition === -1) {
      console.log('Basement Position:', count);
      break;
    } else {
      count++
    }
  }
  console.timeEnd('PartTwo')
})

// Andrei's Solution
function question2(){
  fs.readFile('./input.txt', (err, data) => {
    console.time('Santa Time Part 2');
    const directions = data.toString();
    const directionsArray = directions.split('');
    let accumulator = 0;
    let counter = 0;
    const answer = directionsArray.some((currentItem) => {
      if (currentItem === '('){
        accumulator += 1
      } else if (currentItem === ')'){
        accumulator -= 1
      }
      counter ++
      return accumulator < 0;
    })
    console.timeEnd('Santa Time Part 2');
    console.log('Basement entered at:', counter);
  })
}
question2()
