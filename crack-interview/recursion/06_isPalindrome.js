/**
 * Find out if a string is a palindrome using recursion
 * It's the implementation of 2 pointer method using loop. (see basic problem - 9)
 * We're starting from the start and end of an array simultaneously. 
 * There are 2 base case ->
*/

const isPalindrome = (strArr,start,end) => {

  //base case
  if(start>end) return true;
  if(strArr[start] !== strArr[end]) return false;

  //recursive case
  return isPalindrome(strArr,start+1,end-1);
};

let str = 'madam';
console.log(isPalindrome(str.split(""),0,str.length-1));
