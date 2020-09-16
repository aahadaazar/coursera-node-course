var rect = require('./rectangle');

var rect = {
  perimeter: (x, y) => 2 * (x + y),
  area: (x, y) => x * y
}

const solveRect = (l, b) => {
  console.log(`Solving for length: ${l} and width: ${b}`);
  if (l <= 0 || b <= 0) {
    console.log('Value or Values should be greater than 0');
    console.log('\n');
    return;
  }
  console.log(`Area: ${rect.area(l, b)}`);
  console.log(`Perimeter: ${rect.perimeter(l, b)}`);
  console.log('\n');
}


solveRect(2, 3);
solveRect(0, 4);