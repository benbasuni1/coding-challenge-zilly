const unshiftZeroIfNeeded = arr => {
  let onesLength = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '1') onesLength++;
    else break;
  }

  if (onesLength % 2 !== 0) arr.unshift('0');

  return arr;
}

const returnBreakingPoints = arr => {
  let breakingPoints = [];

  for (let i = arr.length - 1; i >= 2; i--) {
    if (arr[i] === '1' && arr[i - 1] === '1') {
      breakingPoints.push(i - 1);
      i--;
    }
  }

  return breakingPoints;
}

const handleEdgeCases = str => {
  if (str === '0') return 0;
  if (str === undefined) return 'Input cannot be undefined';
  if (typeof str !== 'string') return 'Input should be a string';
  if (!str.match('^[01]+$')) return 'Input should contain ONLY 1s or 0s';
  if (str.length < 1 || str.length > 100000) return 'Input should be within range 0 - 100,000';

  return null;
}

const sequenceBits = x => {

  // Handle Edge cases
  if (handleEdgeCases(x)) return handleEdgeCases(x);

  // Split the string into array format
  x = x.split('');

  // Determine whether or not the string needs a leading 0 or not
  x = unshiftZeroIfNeeded(x);

  // Add breaking points -> Specifically if array has 11
  let breakingPoints = returnBreakingPoints(x);

  let result = '';

  // Loop through array and convert specifically to negative relation
  for (let i = 0; i < x.length; i++) {
    let tuple = [x[i], x[i + 1]];

    if (tuple[0] === '1' && tuple[1] === '1') {
      result += '01';
      i++;
    }
    else if (tuple[0] === '0' && tuple[1] === '0' || tuple[0] === '0' && tuple[1] === undefined ||
    tuple[0] === '0' && breakingPoints.includes(i + 1)) {
      result += '0';
    }
    else if (tuple[0] === '0' && tuple[1] === '1') {
      result += '11';
      i++;
    }
  }

  // Strip off all 0s in front
  while (result[0] === '0') result = result.slice(1);

  return result;
}

/* TEST EDGE CASES */
const hundredThousand1 = (str = '') => {
  for (let i = 0; i < 100001; i++)
    str += '1';

  return str;
}
//console.log("sequenceBits('asdf')", sequenceBits('asdf'));
//console.log("sequenceBits([])", sequenceBits([]));
//console.log("sequenceBits({})", sequenceBits({}));
//console.log("sequenceBits(2)", sequenceBits(2));
//console.log("sequenceBits(hundredThousand1())", sequenceBits(hundredThousand1()));
//console.log("sequenceBits()", sequenceBits());

/* TEST RAND NUMBERS */
//console.log(sequenceBits('0100')); // 1100
// console.log(sequenceBits('0101')); // 1111
// console.log(sequenceBits('111'));  // 1101

//console.log(sequenceBits('11110'));  // 10

//console.log(sequenceBits('10100'));  // 20

//console.log(sequenceBits('11101010001110001'));  // 54321
//console.log(sequenceBits('11000101011')); // 471
//console.log(sequenceBits('111000001001001')); // 12345
//console.log(sequenceBits('10110011')); // 145
//console.log(sequenceBits('1100010101100')); // 1884
//console.log(sequenceBits('11000101011001101110100010101')); // 123456789
//console.log(sequenceBits('11011001011111011110101110000100000010101110000111111110001')); // 64
//console.log(sequenceBits('1100010100001101011100011010001010010100000011000111100000101110011000111111100001010')); // (85) 8,917,487,283,748,234,623,462,134

/* 3 bits
    4 - 001
   -4 - 0011
*/
//console.log(sequenceBits('001')); // 0011

/* 5 bits
    9 - 10011
   -9 - 1101
*/
//console.log(sequenceBits('1101')); // 10011
//console.log(sequenceBits('10011')); // 1101
//console.log(sequenceBits('100011')); // 11001
//console.log(sequenceBits('11001')); // 100011


/* 7 bits
   73 - 1001101
  -73 - 11010011
*/
//console.log(sequenceBits('1001101')); // 11010011
//console.log(sequenceBits('11010011')); // 1001101

/* 16 bits
    10605 - 101111010111111
   -10605 - 11101001110101
*/
//console.log(sequenceBits('101111010111111')); // 11101001110101
//console.log(sequenceBits('11101001110101')); // 101111010111111

/*

   10111110100011110101


   */

