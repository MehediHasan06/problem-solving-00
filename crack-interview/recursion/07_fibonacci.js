/**
 * Two types of recursion - linear recursion -> factorial. tree recursion -> fibonacci
 * The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * The Rule is xn = xn−1 + xn−2
 * x9= x9−1 + x9−2 = x8 + x7 = 21 + 13 = 34
 * 
 * n =	0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	...
 * xn =	0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	...
*/

const fibonacci = (n) => {
  // base case
  if(n<=1) return n;

  // recursive case
  return fibonacci(n-1) + fibonacci(n-2);
};

//fib(0) -> 0
//fib(1) -> 1
//fib(2) -> 1

console.log(fibonacci(5))

// memoization, dynamic programming