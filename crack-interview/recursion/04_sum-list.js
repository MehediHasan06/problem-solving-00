/**
 * - Given a list of numbers, sum of all the elements of the list using recursion
 * Steps:
 * 1 + sumList([1,3,5,7,9] ,1,4)
 *     3 + sumList([1,3,5,7,9] ,2,4)
 *          5 + sumList([1,3,5,7,9] ,3,4) 
 *              7 + sumList([1,3,5,7,9] ,4,4)
 *                  9 + sumList([1,3,5,7,9] ,5,4)
 *                       0
 *                 
*/
const sumList = (list, start, end) => {
  //base case
  if(start>end){
    return 0; 
  };

  //recursive case
  return list[start] + sumList(list, start+1, end);
};

// starting from the end and when the base case meets 0 then we will send the first value of the list.
/**
 * 9 + sumList2(list, 3)
 *     7 + sumList2(list, 2)
 *        5 + sumList2(list, 1)
 *            3 + sumList2(list, 0)
 *                1
 */
const sumList2 = (list, end) => {
  if(end === 0 ) {
    return list[0];
  };
  return list[end] + sumList2(list, end-1);
};

console.log(sumList2([1,3,5,7,9],4));