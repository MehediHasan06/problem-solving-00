/**
 * Problem link - https://www.hackerrank.com/challenges/flipping-bits/problem
 * Steps:
 * 1. modify the input numbers and put them into an array
 * 2. the first number of the array indicates how many numbers I need to convert binary and flip. So, run a loop to those numbers.
 * 3. convert each number to binary
 * 4. convert them to 32 bit
 * 5. flip them
 * 6. again convert them to decimal
*/

let n=`3
  2147483647
  1
  0`
;

const flippingBits = (n) => {
  let flippedArray = [];
  let numArr = n.split("\n").map(item => parseInt(item));

  for(let i=1; i<numArr.length; i++){
    let binaryArr=[];
    let decimalInput = numArr[i];
    let fourByteBinArr;
    let fourByteFlippedBinArr=[];

    // converting to binary 
    while(numArr[i]>0){
      binaryArr.unshift(decimalInput%2)

      decimalInput = Math.floor(decimalInput/2);
      console.log(decimalInput);
      if(decimalInput == 0 ) break;
    }

    // converting them to 32 bit
    fourByteBinArr = binaryArr.join("").padStart(32,'0').split("");

    // flipping them
    fourByteBinArr.forEach(item => {
      if(item=='1'){
        fourByteFlippedBinArr.push(0);
      } else {
        fourByteFlippedBinArr.push(1);
      }
    });

    // convert to decimal
    let decimalVal = fourByteFlippedBinArr.join("");
    flippedArray.push(parseInt(decimalVal,2));

  }

  console.log(flippedArray)
};

flippingBits(n);
