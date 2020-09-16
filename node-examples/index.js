
var rect = require('./rectangle');


const solveRect = (l, b) => {
  console.log(`Solving for length: ${l} and width: ${b}`);
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log(err.message)
    } else {
      console.log(`Area: ${rectangle.area(l, b)}`);
      console.log(`Perimeter: ${rectangle.perimeter(l, b)}`);
      console.log('\n');
    }
  })
}


solveRect(2, 3);
solveRect(0, 4);