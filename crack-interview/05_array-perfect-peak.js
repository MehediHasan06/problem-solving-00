/**
 * You need to check that whether there exist a element which is strictly greater than all the elements on left of it and strictly smaller than all the elements on right of it. If it exists return 1 else return 0.
 * 
 * * Problem link - https://www.interviewbit.com/problems/perfect-peak-of-array/
*/

let A = [5, 1, 4, 3, 6, 8, 10, 7, 9];
// let A = [5, 1, 4, 4]

/**
 * * Brute Force Approach -> time complexity - O(n^2)
 * A : [ 1, 2, 3, 4, 5, 4, 3, 2, 3, 10 ] - failed this case
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
 * * 2nd Approach -> time complexity - O(n)
 * First, we'll make 2 array from A[] - max-left[] and min-right[].
 * max-left[] -> for every index in A[], we'll check the max value from it's left. Traversing from left
 * min-right[] -> for every index in A[], we'll check the min value from it's right. Traversing from right.
 * A=          [5,1,4,3,6,8,10,7,9];
 * max-left=   [5,5,5,5,6,8,10,10,10];
 * min-right=  [1,1,3,3,6,7,7,7,9];
 * 
 * Now, for every index value A[i], 
 *      -> it has to be `bigger` than from this position to left in max-left (max-left[i-1])
 *      -> it has to be `smaller` than from this position to right in min-right (min-right[i+1])
*/

// we need to ignore first and last index. so, we're filling maxLeft[0]=A[0] and minRight[A.length-1]=A[A.length-1]
let maxLeft=[A[0]];
let minRight=Array(A.length-1).fill(0);
minRight[A.length-1] = A[A.length-1];

//making the maxLeft array ->
for(let i=1; i<A.length; i++){
  if(maxLeft[i-1]>A[i]){
    maxLeft.push(maxLeft[i-1]);
  } else {
    maxLeft.push(A[i])
  }
};

//making the minRight array ->
for(let i=A.length-2; i>=0; i--){
  if(A[i]<minRight[i+1]){
    minRight[i]=A[i];
  }else{
    minRight[i]=minRight[i+1]
  }
};

for(let i=1; i<A.length-1; i++){
  if(A[i]>maxLeft[i-1] && A[i]<minRight[i+1]){
    console.log("Got the perfect peak ->");
    return 1;
  }
};

return 0;

