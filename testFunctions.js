let TestCase     = []
let NegTestCase  = []

let specificTest = '';

// Specific Test for bitLength of bits
const specific = bitLength => {
  let str = '';

  for (let i = 0; i < bitLength; i++ ) {
    let bit = Math.round(Math.random());
    str += bit;
  }

  return str;
}

specificTest = specific(11);

// Testing all integers from 0 - 5,000,000
const intToBase2 = num => {
  let Schroeppel2 = 0xAAAAAAAA;
  return ( (num + Schroeppel2) ^ Schroeppel2 ).toString(2).split('').reverse().join('');
}

for (let i = 1; i <= 5000000; i++) {
  TestCase.push(intToBase2(i));
  NegTestCase.push(intToBase2(i * -1));
}

module.exports = {
  specificTest,
  TestCase,
  NegTestCase
}
