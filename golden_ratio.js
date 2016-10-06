const Decimal = require('decimal.js');

// The maximum number of decimal places of the results of operations involving division, i.e. division, square root and base conversion operations, and power operations with negative exponents.
Decimal.config({ precision: 500000});

let lastTwo = [new Decimal(0), new Decimal(1)];
let i = 10000000;

while(i--){
  lastTwo = [lastTwo[1], lastTwo[0].plus(lastTwo[1])];

  if(i % 1000 === 0){
    console.log(lastTwo[1].dividedBy(lastTwo[0]).toString());
  }
}
