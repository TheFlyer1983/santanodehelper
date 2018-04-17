const fs = require('fs');

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
