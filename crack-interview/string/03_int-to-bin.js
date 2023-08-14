/**
 * convert integer to binary
 * Steps:
 * 10%2=0 | 10/2=5
 * 5%2=1 | 5/2=2
 * 2%2=0 | 2/2=1
 * 1%2=1 | 1/2=0
 * So, the loop will run until the Quotient will be 0. The binary will be counted via backwards. like the binary of 10 is 1010
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

