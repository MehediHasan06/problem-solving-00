/**
 * Find out if a string is a palindrome using recursion
 * It's the implementation of 2 pointer method using loop. (see basic problem - 9)
 * We're starting from the start and end of an array simultaneously. 
 * There are 2 base cases.
 * Steps:
 * "madam", 0, str_len-1 
 * "ada", 1, str_len-2 
 * "d", 2, str_len-3
 * "d", 2, str_len-3 -> (true) -> "ada", 1, str_len-2 -> (true) -> "madam", 0, str_len-1 (true) => Palindrome
 * 
 * "madaam", 0, str_len-1
 * "adaa", 1, str_len-2
 * "adaa", 1, str_len-2 -> (false) -> "madaam", 0, str_len-1 (false) => Not Palindrome
*/

const isPalindrome = (strArr,start,end) => {

  //base case
  if(start>=end) return true;
  if(strArr[start] !== strArr[end]) return false;

  //recursive case
  return isPalindrome(strArr,start+1,end-1);
};

let str = 'madam';
console.log(isPalindrome(str.split(""),0,str.length-1));
