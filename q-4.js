const number = [1, 2, 3, 4];
const numbers = [1, 2, 4, 1];

const check_unique = (array) => {
  let tracker = [];

  for (let i = 0; i < array.length; i++) {
    if (tracker.includes(array[i])) {
      return true;
    } else {
      tracker.push(array[i]);
    }
  }

  return false;
};

console.log(check_unique(number));
console.log(check_unique(numbers));
