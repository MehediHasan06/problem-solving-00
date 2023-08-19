/**
 * When n=10 -> It will call the print(10-1) function. It will not print the console.
 * Then n=9 -> It will call the print(9-1) again. Again, it will not print the console.
 * Fast forward....
 * When n=1 -> It will call the print(1-1). Then, in print(0) funtion, it will match the base case and return the function without proceding further.
 * Then it will get back to its previous function-print(1) and proceed from the recursive case. As, this line print(1-1) returns nothing, so the next line is console(n) and n=1. So, it will print 1.
 * 
*/

const print = (n) => {
	//base case
	if(n<=0){
		return;
	};
	
	//recursive case
	print(n-1);

	console.log(n);
};

print(10);
