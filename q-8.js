const s = "hungry";
const x = "beauty";

const number_of_vowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];

  let total = 0;

  for (let i in str) {
    if (vowels.includes(str[i])) total += 1;
  }

  return total;
};

console.log(number_of_vowels(s));
console.log(number_of_vowels(x));
