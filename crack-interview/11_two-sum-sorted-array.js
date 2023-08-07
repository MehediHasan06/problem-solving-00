/**
 * problem link - https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. 
 * 
 * * Algorithm: Using 2 pointer method
 * As, this is sorted array, so, the first element of the array is the lowest and the last one is the highest. 
 * 1. If their sum is greater than the target, then we need to lower the value from the last (using the last pointer) and checking the decreased value by adding with the first array element one by one.
 * 2. Otherwise decrease from the start and halt the last pointer.
 * 3. keep in mind that, it's 1 based index system. So, keep that is mind while returning the 
*/

// let numbers = [2,7,11,15];
// let numbers = [2,3,4];
let numbers = [-1,0];

// let target = 9;
// let target = 6;
let target = -1;

if(numbers[0]+numbers[numbers.length-1] > target){
  console.log("first and last sum bigger than the target.");
  for(let i=0,j=numbers.length-2; j>i ;j--){
    if(numbers[i]+numbers[j] == target){
      console.log(i+1,j+1);
      break;
    }
  }

} else if(numbers[0]+numbers[numbers.length-1] < target) {
  console.log("first and last sum smaller than the target.");
  for(let i=1,j=numbers.length-1; i<j; i++){
    if(numbers[i]+numbers[j] == target){
      console.log(i+1,j+1);
      break;
    }
  }

} else {
  console.log("got the target at first")
  console.log(1,numbers.length)
}
