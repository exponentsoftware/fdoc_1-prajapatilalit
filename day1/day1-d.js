function varietyOfWords(words) {
  let split = words.split(/\W+/);

  console.log([...new Set(split)].length);
}

const sentence =
  "I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher";
varietyOfWords(sentence);
