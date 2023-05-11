/*
Given a string, return true if the string starts with "hi" and false otherwise.

 startHi("hi there") → true
 startHi("hi") → true
 startHi("hello hi") → false
* */
const startHi = (str) => {
	return str.startsWith("hi");
};
console.log(startHi("hi there"));
console.log(startHi("hi"));
console.log(startHi("hello there hi"));
