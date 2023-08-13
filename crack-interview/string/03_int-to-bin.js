/**
 * convert integer to binary
*/

let intNum = 10;
let numArr = [];
let binStr = "";

let result=intNum;
while(result > 0){
	numArr.unshift(result%2);
	result = parseInt(result/2);
}
console.log(numArr);

for(let i=0; i<numArr.length; i++){
	binStr += numArr[i];
};
binStr = parseInt(binStr);
console.log(binStr, typeof binStr);

