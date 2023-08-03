/**
 * You need to check that whether there exist a element which is strictly greater than all the elements on left of it and strictly smaller than all the elements on right of it. If it exists return 1 else return 0.
 * 
 * * Problem link - https://www.interviewbit.com/problems/perfect-peak-of-array/
*/

let A = [5, 1, 4, 3, 6, 8, 10, 7, 9];
// let A = [5, 1, 4, 4]

/**
 * * Brute Force Approach -> time complexity - O(n^2)
*/

// for(let i=1; i<A.length-1; i++){
//   let flag = true;
//   //checking left side -> 
//   for(let j=i-1; j>=0; j--){
//     if(A[i]<A[j]){
//       flag = false;
//       break;
//     }
//   };
//   //checking right side ->
//   for(let k=i+1; k<=A.length-1; k++){
//     if(A[i]>A[k]){
//       flag = false;
//       break;
//     }
//   };
//   console.log("step ------------", i,flag);
//   if(flag){
//     return 1;
//   }
// };
// return 0;
// 

/**
 * * 2nd Approach
*/

