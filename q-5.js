const power_of_2_check = (integer) => {
  for (let i = 0; i < integer; i++) {
    if (integer == 2 ** i) {
      console.log(`true (2^${i})`);
      return;
    }
  }
  console.log(false);
};

power_of_2_check(16);
power_of_2_check(1);
power_of_2_check(3);
