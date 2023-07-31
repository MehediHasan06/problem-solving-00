/**
 * [0,-1,3,100,-70,-50]
 * [1,2,3,4]
*/

let x = [0,-1,3,100,-70,-50].sort((a,b) => a-b);
// let y = [1,2,3,4].sort((a,b) => a-b);

let arrLength = x.length;
let product1 = x[arrLength-1] * x[arrLength-2] * x[arrLength-3];
let product2 = x[0] * x[1] * x[arrLength-1];
let product = Math.max(product1, product2);

/**
 * * Doing this for this particular array, where the sorted array will be [-70,-50,-1,0,3,100]. So, the last 3 items product will be 0.
 */

console.log(product);



