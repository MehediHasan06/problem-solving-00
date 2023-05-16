/**
 * Higher order function
 */

var once = function(fn) {
  let count = 0;
    return function(...args){
      // console.log(args); //[1,2,3] array because of rest param 
      // console.log(...args);// 1 2 3 individual numbers because of spread operator
      let result = fn(...args);
      if(count === 0){        
        count+=1;
        return result;
      } else {
        return undefined;
      }
    };
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn);
console.log(onceFn(1,2,3));
console.log(onceFn(1,2,2));
