const sequenceBits = x => {
  let result = '';
  let tuple = [0, 0];
  debugger;
  x = x.split('');
  if (x[1] === '0' || (x[1] === '1' && x[2] === '1')) x.unshift('0');

  for (let i = 0; i < x.length; i++) {
    tuple = [x[i], x[i + 1]];

    if (tuple[0] === '1' && tuple[1] === '1') {
      result += '01';
      i++;
    }
    else if (tuple[0] === '0' && tuple[1] === '0' || tuple[0] === '0' && tuple[1] === undefined) {
      result += '0';
    }
    else if (tuple[0] === '0' && tuple[1] === '1') {
      result += '11';
      i++;
    }
  }

  while (result[0] === '0') result = result.slice(1);

  return result;
}

console.log(sequenceBits('0100')); // 1100
console.log(sequenceBits('0101')); // 1111
console.log(sequenceBits('111'));  // 1101
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



