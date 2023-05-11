/*
*
*Say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.
*
*
* hasTeen(13, 20, 10) → true
* hasTeen(20, 19, 10) → true
* hasTeen(20, 10, 12) → false
* */
const hasTeen = (...age) => {
	
  let teenList = age.find((teen) => (teen>=13 && teen<=19));
  return teenList? true : false;
};
console.log(hasTeen(13, 20, 10));
console.log(hasTeen(20, 19, 10));
console.log(hasTeen(20, 10, 12));
