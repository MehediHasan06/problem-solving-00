/**
 * When n=10 -> It will call the print(10-1) function. It will not print the console.
 * Then n=9 -> It will call the print(9-1) again. Again, it will not print the console.
 * Fast forward....
 * When n=1 -> It will call the print(1-1). Then, in print(0) function, it will match the base case and return the function without proceeding further.
 * Then it will get back to its previous function-print(1) and proceed from the recursive case. As, this line print(1-1) returns nothing, so the next line is console(n) and n=1. So, it will print 1.
 * Then it will get back to its previous function-print(2) and proceed from the recursive case. This line will return console(1) and the next line is console(n) and n=2. So, it will print 1 and 2. 
 * This will go on to 10, where the function is originally started.
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
