/**
 * problem link - https://leetcode.com/problems/valid-palindrome/
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
    Given a string s, return true if it is a palindrome, or false otherwise.
*/

/**
 * * I've solved this problem using `two pointer` method
 */

let s = "A man, a plan, a canal: Panama";

//the \W special character to shorten regex and remove all non-alphanumeric characters from a string.
let convertedStr = s.replace(/\W/g, '').toLowerCase();

let strArr = convertedStr.split("");

for(let i=0,j=strArr.length-1; i<strArr.length/2; i++,j--){
  if(strArr[i] !== strArr[j]){
    console.log("Not palindrome !!!");
    return false;
  }
};

console.log("palindrome !!! ");
return true;



