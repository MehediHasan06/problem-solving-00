const getFactorial = (n) => {
  let factorial = 1;
  for(let i=n; i>=1; i--){
    if(n === 0) return factorial;
    factorial = factorial * i;
  };

  return factorial;
};

console.log(getFactorial(0));
