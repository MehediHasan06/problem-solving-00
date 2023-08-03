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

for(let i=0; i<A.length; i++){
  for(let j=i+1; j<A.length; j++){
    for(let k=j+1; k<A.length; k++){

      console.log(`Step-${i}-${j}-${k}, Value-${A[i]}-${A[j]}-${A[k]}`);
      let result = A[k]*A[j]*A[i];
      
      if(highest_product<result){
        highest_product = result;
      }
    }
  }
};
// console.log(highest_product); 
// But, it's time complexity is O(n3), which is a lot. So, we need another approach to reduce the time complexity. It's a brute force solution


/**
 * * 2nd approach. This will fully complement our problem. We need to handle an edge case where 1st 2 values are negative. - >
 */
let x = [0,-1,3,100,-70,-50].sort((a,b) => a-b); // [-70,-50,-1,0,3,100]

let arrLength = x.length;
let product1 = x[arrLength-1] * x[arrLength-2] * x[arrLength-3];
let product2 = x[0] * x[1] * x[arrLength-1]; // in sorted array, if we take the first 2 then we will get +ve product.
let product = product1 > product2 ? product1 : product2;

/**
 * * Doing this for this particular array, where the sorted array will be [-70,-50,-1,0,3,100]. So, the last 3 items product will be 0.
 * 
 * * Time complexity - O(1)
 */

// console.log(product);



