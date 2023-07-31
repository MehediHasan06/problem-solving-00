/**
 * * Problem link - 
 * * Return the highest product possible by multiplying 3 numbers from the array.
 * [0,-1,3,100,-70,-50]
 * [1,2,3,4]
 * 
*/

/** 
 * * 1st approach -> We want to multiple each number with each other. It's a combination process which will require 3 loops as this problem requires multiplying 3 numbers.
*/ 
let highest_product = 0;
let A = [1,2,3,4];

for(let i=0; i<3; i++){
  for(let j=i+1; j<3; j++){
    for(let k=j+1; j<3; j++){
      
      let result = A[k]*A[j]*A[i];
      
      if(highest_product<result){
        highest_product = result;
      }
    }
  }
};
console.log(highest_product);


// 2nd approach
let x = [0,-1,3,100,-70,-50].sort((a,b) => a-b);
// let y = [1,2,3,4].sort((a,b) => a-b);

let arrLength = x.length;
let product1 = x[arrLength-1] * x[arrLength-2] * x[arrLength-3];
let product2 = x[0] * x[1] * x[arrLength-1];
let product = Math.max(product1, product2);

/**
 * * Doing this for this particular array, where the sorted array will be [-70,-50,-1,0,3,100]. So, the last 3 items product will be 0.
 * 
 * * Time complexity - O(1)
 */

// console.log(product);



