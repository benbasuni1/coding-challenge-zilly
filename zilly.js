/*
   Pseudocode:
   1. Handle edge cases to accept only bits. <-- Use regex here
   2. Turn the bits into an integer (just multiply -1 to get the negative number)
      - To get the bits into integer, use given hint [ sum{ B[i]*(-2)i for i = 0..N-1 } ]
   3. With the negative number in step 2, create a function that turns the negative number into bits
      - Keep dividing string by 2 (base2 bits),
      - Whatever 'remainder' we have (either 0 or 1), that becomes a bit that is concatenated to endResult
 */

const specificCase = require('./testFunctions.js').specificTest;
const testCase     = require('./testFunctions.js').TestCase;
const negTestCase  = require('./testFunctions.js').NegTestCase;

// Main Function (SequenceBits)
const sequenceBits = str => {

  // Handle edge cases

  // Return 0
  if (str === '0') return 0;

  // Input cannot be undefined
  if (str === undefined) return 'Input cannot be undefined';

  // Input cannot be anything else except a string
  if (typeof str !== 'string') return 'Input should be a string';

  // each character of string S is either '0', '1'.
  if (!str.match('^[01]+$')) return 'Input should contain ONLY 1s or 0s';


  // M is an integer within the range [0..100,000],
  // string S has a length of at least 1, and
  if (str.length < 1 || str.length > 100000) return 'Input should be within range 0 - 100,000';

  // Turn the bits into Integer * -1
  const num = getNegDecFromBit(str);

  // Return negative Integer to Bits
  return getBitFromDec(num);
}

const getNegDecFromBit = str => {
  let result = 0;

  // Apply sum{ B[i]*(-2)i for i = 0..N-1 }
  for (let i = 0; i < str.length; i++) {
    result += str[i] * Math.pow(-2, i);
  }

  // Return negative number
  return -1 * result;
}

const getBitFromDec = num => {
  // Got a more efficient algorithm by researching negabinaries,
  // https://en.wikipedia.org/wiki/Negative_base for reference
  let Schroeppel2 = 0xAAAAAAAA;
  return ( (num + Schroeppel2 ) ^ Schroeppel2 ).toString(2).split('').reverse().join('');
}

/* Testing edge cases */
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


/* Testing Example given */
// given S = "10011" (which equals 9), the function should return "1101" (which equals -9), and
// given S = "001" (which equals 4), the function should return "0011" (which equals -4).
//console.log(sequenceBits('10011')); // 9
//console.log(sequenceBits('001'));   // 4
console.log(specificCase, sequenceBits(specificCase));   // 4

/* Testing 0 to 5million
 * Longest is only 21 digits long
 */
//for (let i = 1; i <= 5000000; i++) {
  //if ((sequenceBits(negTestCase[i - 1]) === testCase[i - 1]) === false) console.log(i, 'is false');
  //else console.log(i, sequenceBits(negTestCase[i - 1]), negTestCase[i - 1], testCase[i - 1].length, sequenceBits(negTestCase[i - 1]) === testCase[i - 1]);
//}

/* Testing Specific Length of M */

/*
 * These are my thoughts as I continue to find an optimal solution for the program
 *
 * THOUGHTS 1
 * -----------
 *
 * I need to be able to find a 'faster' algorithm for the data to handle integers longer than 21 digits. (0 to 1m)
 * Based on numbers from 0 to 1m, all records return true based on test on line 88-91
 * My lack of knowledge in bitwise operations is what is preventing me from finding a faster algorithm.
 * This is where I am at right now.
 *
 * I took the advice given, and re-read the description of the problem 3-4 times quite slowly, rewriting all of the B, M and N as representational values for
 * clarification.
 *
 * Perhaps I am overlooking the 'SHORTEST SEQUENCE' part in the description.
 *
 * I created tests to make sure that negative integers and positive integers were both taken into account and those are verified.
 * I also implemented more edge case functionality, but felt like I am just trying to solidify the 'salad' of the meal, rather than attack the 'meat' of it.
 *
 * THOUGHTS 2
 * ----------
 *
 * After doing some research on how to create a more efficient algorithm, I stumbled upon the Schroeppel algorithm which makes my algo a bit faster.
 * Now my tests can handle digits of up to 3m+, whereas my traditional solution I only could handle integers of up to 1million records only.
 *
 * The only thing that would make my test complete and ready for submission is if I can just test a 100,000 bit integer.
 * But instead of jumping ahead and testing straight up for a 100,000 bit integer,
 * I'm going to slowly do it bit by bit, perhaps testing out 100 digits, then 500, then 1000... etc, etc.
 *
 * ---
 * After successfully writing the specificCase to accept n bits, I have successfully double checked the positive and negative bits
 * using https://www.dcode.fr/negabinary-system to verify that the bits match (positive and negative)
 *
 * Now, I am going to test 10, 25, 50, 100 respectively
 * [x] 10 - 1111001011 101000111 => 197 & -197 - 1111100001 10101100011 => 501 & -501
 * [ ] 25 -
 * [ ] 50
 * [ ] 100
 *
 * What I found out was that, even 11 bits was incorrect. Debugging now...
 *
 * Can't understand why 11 bits is incorrect..
 *
 * THOUGHTS 3
 * ----------
 * Now I am slowly testing by numbers. Currently on 10,000 - 10,010 which has 15 bits, which is correct. ??? But earlier 11 bits didn't work?
 * I am continuing to investigate this further.
 *
 * Tested num 1 - 5,000,000 and it looks correct. Specifically tested 4,999,994 and equaled out correct.
 */
