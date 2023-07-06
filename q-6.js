const add_to_single = (integer) => {
  let sum = integer;

  while (sum.toString().length > 1) {
    const str = sum.toString();
    let temp_sum = 0;

    for (let i in str) {
      temp_sum += Number(str[i]);
    }

    sum = temp_sum;
  }

  return sum;
};

console.log(add_to_single(38));
console.log(add_to_single(242));
console.log(add_to_single(1111));
