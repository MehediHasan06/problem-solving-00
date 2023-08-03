const sum_of_natural_numbers = (n) => {
  let sum = 0;
  for(let i=1; i<=n; i++){
    sum += i;
  }

  return sum;
};

console.log(sum_of_natural_numbers(5));
