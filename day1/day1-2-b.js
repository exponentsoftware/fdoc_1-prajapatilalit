const randomSevenNumber = [];

for (let i = 0; i < 7; i++) {
  function sevenRandomNumbers() {
    const randomNumber = Math.floor(Math.random() * 10);
    randomSevenNumber.push(randomNumber);
  }
  sevenRandomNumbers();
}
// array contains seven random numbers
console.log(randomSevenNumber);
