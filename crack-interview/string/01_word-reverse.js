/**
 * Reverse the given sentence with loop
 *
 * Steps: 
 * 1.run a loop through the entire sentence
 * 2.take a variable 'word' to construct the word with letters untill there is a space
 * 3.when there is a space push the word to an array called 'words'. Also, add another condition to add the last word to the array
 * 4.push the words from the array to an empty string 'reversedSentence' by running a loop
*/

let sentence = "i love my country";
let reversedSentence = "";
let word = "";
let words = [];

for(let i=0; i<sentence.length; i++){
  if(sentence[i] !== " "){
	word += sentence[i];
  } else{
	words.unshift(word);
	word = "";
  }
};
if(word !== ""){
	words.unshift(word);
};

for(let i=0; i<words.length; i++){
	reversedSentence += words[i];
	if(i !== words.length-1){
		reversedSentence += " ";
	}
};

console.log(reversedSentence);

