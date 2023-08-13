/**
 * Reverse the character of each words while keeping them in order
 * Steps:
 * The difference between the previous "reversed sentence" problem with this one is that - we need to start the initial loop in reverse in order to reverse each character of the word.
*/

let sentence = "i love my country";
let reversedChar = "";
let words = [];
let word = "";

for(let i=sentence.length-1; i>=0; i--){
	if(sentence[i] !== " "){
		word += sentence[i];
	} else {
		words.unshift(word);
		word = ""
	}
};
if(word !== ""){
	words.unshift(word);
};

for(let i=0; i<words.length; i++){
	reversedChar += words[i];
	if(i !== words.length-1){
		reversedChar += " ";
	}
};

console.log(reversedChar);

