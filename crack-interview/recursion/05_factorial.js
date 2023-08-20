/**
 * Factorial with recursion
 * Steps:
 * 4 * func(3)
 *    3 * func(2)
 *        2 * func(1)
 *            1 * func(0)
 *                1
*/

const getFactorial = (n) => {
  //base case
  if(n==0){
    return 1;
  }

  //recursive case 
  return n * getFactorial(n-1);
};

console.log(getFactorial(4));