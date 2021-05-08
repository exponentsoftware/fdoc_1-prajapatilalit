function pattern(length) {
  let line = "";
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= i; j++) {
      line += "#";
    }
    line += "\n";
  }
  return line + "\n";
}

console.log(pattern(7));

//without function

// let length = 7;
// let line = "";
// for (let i = 1; i <= length; i++) {
//   for (let j = 1; j <= i; j++) {
//     line += "#";
//   }
//   line += "\n";
// }
// console.log(line + "\n");
