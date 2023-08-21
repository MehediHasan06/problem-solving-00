/**
 * Write a function that does the following task.
 * Write a recursive function to multiply given two positive integers ‘a’ and ‘b’ without using the * operator (multiplication operator). You can only use + operator (addition operator) and - operator (subtraction operator).
 *  Example 1:
    Input: a = 4, b = 5
    Output: 20
  * What we can do, a can be base number and b can be the multiplying number. We can add as many times of the value of b
  * output: 4+4+4+4+4 = 20
*/

const getMultiplication = (a,b) => {
  //base case
  if(b<=0) return 0;

  //recursive case
  return a + getMultiplication(a,b-1);

};
console.log(getMultiplication(0,2));

// time complexity -> O(b) -> O(n)
// space complexity -> 1
