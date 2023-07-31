var timeLimit = function(fn, t) {
  console.log(fn);
  console.log(t);
	return async function(...args) {
    return new Promise((resolve, result) => {
      
    })
    
  }
};

// const limited = timeLimit(
//   (t) => new Promise(res => setTimeout(res, t)), 100
// );
// console.log(limited(150));
//limited(150).catch(console.log);

async function fn(n) {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log("got after 1s");
      resolve()
    },1000);
  });
  return n*n;
};

// console.log(fn(5))
const fn2 = (t) => new Promise(resolve => setTimeout(() => {
  console.log("got it")
  resolve();
}, t));
let t = Date.now();
fn2(2000)
  .then(() => console.log(Date.now() - t));
