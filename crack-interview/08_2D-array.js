const inputArr = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]
];

let rowLength = 3;
let colLength = 4;

// 1st problem - row major problem - try to predict the output
for(let row=0; row<rowLength; row++){
  for(let col=0; col<colLength; col++){
    // console.log(inputArr[row][col]);
  };
};
/** 0,0 0,1 0,2 0,3
 *  1,0 1,1 1,2 1,3
 *  2,0 2,1 2,2 2,3
 * 
 * This is print like this order. [row] [col] order
**/

// 2nd problem
for(let row=rowLength-1; row>=0; row--){
  for(let col=0; col<colLength; col++){
    // console.log(inputArr[row][col]); // guess the output then run to check

    // console.log(inputArr[col][row]); // this will give us an error. keep in mind that,in 2D array problems,if row and col lengths are not equal, then we may not get some elements while trying to traverse like - arr[col][row]. So, its safe to traverse like -arr[row][col] always. Which is the best practice.
  };
};

//3rd problem
for(let row=rowLength-1; row>=0; row--){
  for(let col=colLength-1; col>=0; col--){
    // console.log(inputArr[row][col]); // try to guess the output and then run to check
  }
}

// 4th problem. column major problem
for(let col=0; col<colLength; col++){
  for(let row=0; row<rowLength; row++){
    console.log(inputArr[row][col]);
  };
};
//it will print the array vertically