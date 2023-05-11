/**
 * Function Composition
*/
var compose = function (functions) {
  return function (x) {
    if(functions.length === 0){
      return x;
    } else {
      for(let i = functions.length-1; i>=0; i--){
        if(i === 0) {
          console.log("inside if block",i,"-",x);
          console.log(functions[i](x));
        } else {        
          x = functions[i](x);
          console.log("inside else block",i,"-",x);
        }
      }
    }
  }
};
// const fn = compose([x => x + 1, x => 2 * x]);
// const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
const fn3 = compose([]);
// console.log(fn(4));
console.log(fn3(42));

