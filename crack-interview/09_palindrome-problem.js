let str = "abba"; //level,madam

// 1st approach. reverse and compare. (Bruteforce method) --> 
/*
let strArr = str.split("");
<!-- get a reversed array without using built in method -->
let reverseArr = [];
strArr.map(item => reverseArr.unshift(item)); // e.g. strArr=['a','b','c']; reverseArr=['c','b','a'];

for(let i=0; i<strArr.length; i++){
  if(strArr[i] !== reversedArr[i]){
    console.log("Not palindrome!!!");
    return false;
  };
};

console.log("palindrome !!!");
return true;
*/


// 2nd approach. 2 pointer method ->
let strArr = str.split("");

for(let i=0,j=strArr.length-1; i<strArr.length/2; i++,j--){
  console.log("str[i]-",strArr[i],"str[j]-",strArr[j]);

  if(strArr[i] !== strArr[j]){
    console.log("Not palindrome!!!");
    return false;
  };
}

console.log("palindrome!!!");
return true;

