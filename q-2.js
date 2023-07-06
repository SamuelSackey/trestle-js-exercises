const s = "Hello World";

const r = " fly me to the moon";

const last_word = (str) => {
  const str_last = str.split(" ").pop();

  console.log(`The last word is ${str_last} with length ${str_last.length}`);
};

last_word(s);
last_word(r);
