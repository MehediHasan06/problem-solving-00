/**
 * * Problem link - https://www.interviewbit.com/problems/make-equal-elements-array/
 * A=[2,3,1], X=1
 * A=[2,3,1], X=2
 * 3 operations to determine if all the elements of the array can be equal
*/

let A = [2,3,1];
let B = 1;

A=A.map(elem => parseInt(elem)); // interviewbit site has wrong input problem in js. 
A=A.filter((item,index) => A.indexOf(item) === index);

let addArr = [];
let subArr = [];
let nothingArr = [...A];

//making 3 array for 3 operation
for(i=0; i<A.length; i++){
  addArr.push(A[i]+B);
  subArr.push(A[i]-B);
};

console.log(addArr, subArr, nothingArr);

let commonVal;
for(let i=0; i<addArr.length; i++){
  for(let j=0; j<subArr.length; j++){
    if(addArr[i] == subArr[j]){
      commonVal = addArr[i];
      break;
    };
  }
};

let hasCommon = nothingArr.includes(commonVal);
console.log(hasCommon);

