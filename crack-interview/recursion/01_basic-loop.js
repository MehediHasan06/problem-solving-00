/**
 * Print 1 to 10 with recursion
 * In general loop, we have repeatation and breaking condition. Without breaking condition, the repeatation will go forever and will create an infinite loop.
 * In recursion, the repeatation is called "recursive case" and the breaking condition is called the "base case".
*/

const print = (n) => {
	
	// base case
	if(n>10){
		return;
	}
	
	console.log(n);

	//recursive case
	print(n+1);
}
print(1);

/**
 * Print 10 to 1 with recursion
*/
const printReverse = (n) => {
	if(n<=0){
		return;
	};

	console.log(n);
	print(n-1);
};
printReverse(10);
