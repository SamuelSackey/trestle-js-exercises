const arr1 = [2, 8, 22, 10];
const arr2 = [0, 0, 14, 12];

const sum_array = (array) => {
  let sum = 0;

  for (let i in array) {
    sum += array[i];
  }

  return sum;
};

console.log(sum_array(arr1));
console.log(sum_array(arr2));
