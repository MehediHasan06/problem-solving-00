/**
 * - Given a list of numbers, print all the elements of the list using recursion
 * Steps:
 * Step-01 -> console.log(list[0]) => print 0. Then, I will remove the first item from the list using slice(). Then, I will call the recursive function with updated list and increasing the start value by 1.
 * Step-02 ->
*/

const printList = (list, start, end) => {
  //base case
  if(start>end){
    return; 
  };

  console.log(list[start]);

  //recursive case
  printList(list, start+1, end);
};

printList([1,3,5,7,9],0,4);
