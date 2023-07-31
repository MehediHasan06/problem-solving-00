let A = [5, -2, 3 , 1, 2];
let B = 3;

//Calculating the max_sum for first B elements ->
let max_sum = 0;
for (let i=0; i<B; i++) {
  max_sum += A[i];
};

let sum = max_sum;

/**
 * 6-3+2 = 5
 * 5-(-2)+1 = 8
 * 8-5+3 = 6
 * 
 * we're doing this instead of ->
 * 5+(-2)+2 = 5
 * 5+2+1 = 8
 * 3+1+2 = 6
 */

let x,y;
for(let i=0; i<B; i++){
  x = A[B-1-i];
  y = A[A.length-1-i];
  sum = sum - x + y;
  if(sum>max_sum){
    max_sum = sum;
  };
};

console.log(max_sum);

/**
 * * Time complexity = O(B) + O(B) -> O(B)
 */