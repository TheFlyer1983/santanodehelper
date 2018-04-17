const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
  console.time('santaChallenge')
  if (err){
    console.log('Errroorrrrrr');
  }
  const floorsUp = data.toString().match(/\(/gi).length;
  const floorsDown = data.toString().match(/\)/gi).length;
  const floor = floorsUp - floorsDown;
  console.log('Final Floor', floor);
  console.timeEnd('santaChallenge')
})
