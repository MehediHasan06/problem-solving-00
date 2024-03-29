/**
 * 
  Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.
  nearHundred(93) → true
  nearHundred(90) → true
  nearHundred(89) → false
 */

const nearHundred = (n) => {
  return (Math.abs(n-200)<=10 | Math.abs(n-100)<=10) ? true : false;
};
console.log(nearHundred(93));
console.log(nearHundred(190));
console.log(nearHundred(89));
