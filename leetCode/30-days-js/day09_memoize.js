/**
 * Memoization
*/
// solution - 01
// function memoize(fn) {
//   let repeatedVal = [];
//   return function(...args){
//     console.log(args);
//     if(repeatedVal[args] != null){
//       return repeatedVal[args];
//     }
//     let funcOutput = fn(...args);
//     repeatedVal[args] = funcOutput;
//     return funcOutput;
//   };
// };

//solution - 02
function memoize(fn) {
  let cache = {};
  return function(...args){    
    if(cache[args] != null){
      return cache[args];
    }
    const funcOutput = fn(...args);
    cache[args] = funcOutput;
    return funcOutput;
  }
}


let callCount = 0;
const sum = function (a, b) {
	callCount += 1;
  return a + b;
};
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const fib = (n) => {
  if(n<=1) return 1;
  return fib(n-1) + fib(n-2);
};

const memoizedFn = memoize(sum);
const memoFactorial = memoize(factorial);
const memoFib = memoize(fib);

console.log(memoizedFn(2, 3));
console.log(memoizedFn(2, 3));
console.log(callCount);

// console.log(memoFactorial(2));
// console.log(memoFib(5));

