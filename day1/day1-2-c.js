function reverseArray(arr) {
  const rem1 = arr.pop();
  const rem2 = arr.shift();
  arr.unshift(rem1);
  arr.push(rem2);
  console.log(arr);
}

reverseArray(["A", "B", "C"]);
