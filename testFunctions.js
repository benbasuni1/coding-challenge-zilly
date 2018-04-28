const NUM_OF_RAND_TEST_CASES = 100;

let TestCaseRand = []
let TestCase     = []
let NegTestCase  = []

// Random Testing
const randomBits = () => {
  let randomLengthGenerator = () => Math.floor(Math.random() * 100000 + 1);
  let randomLength = randomLengthGenerator();

  let str = '';

  for (let i = 0; i < randomLength; i++ ) {
    let bit = Math.round(Math.random());
    str += bit;
  }

  return str;
}

for (let i = 0; i < NUM_OF_RAND_TEST_CASES; i++) {
  TestCaseRand.push(randomBits());
}

// Testing all integers from 0 - 100,000

/*
  Generate random bit number from length 1 - 100,000
  1. Generate random bit
  2. Generate string filled with random bits with length 1 to 100,000
*/

const intToBase2 = num => {
  let result = '';

  while (num !== 0) {
    let bit = parseInt(num % -2);

    num = parseInt(num / -2);

    if (bit === -1) {
      bit = 1;
      num++;
    }

    result += bit;
  }

  return result;
}

for (let i = 1; i <= 1000000; i++) {
  TestCase.push(intToBase2(i));
  NegTestCase.push(intToBase2(i * -1));
}

console.log(TestCase);

module.exports = {
  TestCaseRand,
  TestCase,
  NegTestCase
}
