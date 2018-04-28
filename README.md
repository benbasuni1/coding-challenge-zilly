# Instructions
---
 In base -2, integers are represented by sequences of bits in the following way.
   Sequence B of N bits, ordered from the least to the most significant, represents the number:

```
   sum{ B[i]*(-2)i for i = 0..N-1 }
```

```
 B = '1001' // Could also be negative
 N = B.length
 i = index of B

In Javascript:
  for (let i = 0; i < N; i++) {
     result += B[i] * Math.pow(-2, i);
  }
```

   Such a representation is suitable for both POSITIVE and NEGATIVE integers.
   i represents the index of the string sequence.

   Write a solution that, given a string S of M length, containing a sequence representing some integer X,
   returns the SHORTEST SEQUENCE OF BITS representing -X. The sequence should be returned as a new string.

    S = '10011'
    M = S.length
    x = 9

   Assumptions:
   M is an integer within the range [0..100,000],
   string S has a length of at least 1, and
   each character of string S is either '0', '1'.

   Complexity:
   expected worst-case time complexity is O(M), and
   expected worst-case space complexity is O(M), beyond input storage (not counting the storage required for input arguments).

   Addendum:
   any programming language can be used, and this test should take no longer than an hour.
   Examples:
   given S = "10011" (which equals 9), the function should return "1101" (which equals -9), and
   given S = "001" (which equals 4), the function should return "0011" (which equals -4).
 */

