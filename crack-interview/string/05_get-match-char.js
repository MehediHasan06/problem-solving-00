/**
 * Return true if the given character matches the string.Need to find out if the 'matchChar' is in the 'str'.
*/


// Brute force method --> time complexity - O(n*m)
//let str1 = "abcdeeeadgzxydfawwasdwewawlwweasdfdf";
let str = "abwwf";
let matchChar = "wwe";
let flag = false;

for(let i=0; i<str.length; i++){
	for(let j=0; j<matchChar.length; j++){
		if(str[i+j] === matchChar[j]){
			flag = true;
		} else {
			flag = false;
			break;
		}
	}
};
console.log(flag);

