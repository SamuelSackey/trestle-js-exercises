const reverse = (integer) => {
  const str = String(integer);
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
};

const palindrome_check = (integer) => {
  const reversed = reverse(integer);

  return integer == reversed;
};

console.log(palindrome_check(121));
console.log(palindrome_check(-121));
console.log(palindrome_check(10));
