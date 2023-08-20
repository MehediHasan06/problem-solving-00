/**
 * Find max number from a list using recursion
 * Algorithm:
 ** recursive case - return Math.max(list[start], findMax(list,start+1,end))
 * steps:
 * max(4, findMax(list,0,4)) - 
 *        max(8, findMax(list,1,4))
 *               max(1, findMax(list,2,4))         
 *                      max(4, findMax(3,4))
 *                              10 (start==end)
 *                       max(4,10)
 *               max(1,10)
 *         max(8,10)
 * max(4,10)
 * return 10
 *                                    
 ** base case - if(start>=end) return list[end]
 * 
 * Time complexity of loop and recursion are same. Except some complex case
*/

const findMax = (list,start,end) => {
  //base case
  if(start>=end)return list[end];

  //recursive case
  return Math.max(list[start], findMax(list,start+1,end));
};

const list = [4,8,1,4,10];
console.log(findMax(list,0,4));

/**
 * Try to find the minimum from a list
 */