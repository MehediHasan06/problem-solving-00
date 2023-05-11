/**
 * Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).
  */

const missingChar = (str, n) => {
	let slicedStr = str.slice(0,n) + str.slice(n+1);
	console.log(slicedStr);
}
console.log(missingChar("kitten", 1));
console.log(missingChar("kitten", 0));
console.log(missingChar("kitten", 4));
