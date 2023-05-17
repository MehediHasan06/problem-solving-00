/**
 * curring paradigm
*/


// we need to know about call,apply and bind method in this journey. Which are function borrowing method.
let user1 = {
  fName: "mehedi",
  lName: "hasan",
  fullName: function(){
    console.log(`${this.fName} ${this.lName}`);
  }
};
let user2 = {
  fName: "shahriar",
  lName: "zihan"
};
let salary = function(salary, bonus) {
  console.log(`${this.fName}'s salary is ${salary}. ${bonus ? `Bonus is ${bonus}`: `Don't have bonus.`}`);
};
// user1.fullName();
// call method
// user1.fullName.call(user2);

// apply method
// salary.apply(user1, [10000]);
// salary.apply(user2, [10000, 2000]);

// bind method
let getSalaryUser1 = salary.bind(user2, 5000, 500);
let getSalaryUser2 = salary.bind(user2, 10000);
// getSalaryUser1();
// getSalaryUser2();




// Why should we use curring
const discountPrice = (price, discount) => {
  return price - price*discount;
};
// console.log(discountPrice(700, 0.1));
// console.log(discountPrice(500, 0.1));
// calling discount price function with the discount argument every time is not ideal. we can use curry pattern here.

const discountPriceWithCurry = (discount) => {
  return function(price){
    return price - price*discount;
  }
};
const tenPDiscount = discountPriceWithCurry(0.1); // we're sending the discount value as hidden state of closure. Which we can use later on.
const twentyPDiscount = discountPriceWithCurry(0.2);

// console.log(tenPDiscount(700));
// console.log(tenPDiscount(600));
// console.log(tenPDiscount(500));
// console.log(twentyPDiscount(500));

// example of curring...
function sum(a){
  return function(b){
    return function(c){
      return a*b*c;
    }
  }
};
function sum2(a){
  return function(b,c){
    return a*b*c;
  }
};

// console.log(sum(2)(3)(4));
// console.log(sum2(2)(3,4));

//curry converter function
// let curryConverter = function(func) {
//   return function curried(...args){
//     console.log("args",args);
//     if(args.length >= func.length){
//       console.log(args);
//       return func.apply(this, args);
//     }else {
//       return function(...args2){
//         console.log(args,args2);
//         return curried.apply(this, args.concat(args2));
//       }
//     }
//   }
// };

// function sum (a,b,c){
//   return a+b+c;
// };
// let curriedSum = curryConverter(sum);
// console.log(curriedSum(1,2,3));
// console.log(curriedSum(1)(2,3));
// console.log(curriedSum(1)(2)(3));


// main problem
var curry = function(fn) {
  return function curried(...args) {
    if(args.length < fn.length){
      return function(...nextArgs){
        return curried(...args,...nextArgs);
      };
    }; 
    return fn(...args);
  };
};

function sum(a, b) { return a + b; }
const csum = curry(sum);
console.log(csum(1)(2)); 
