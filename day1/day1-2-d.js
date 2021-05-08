function checkUniqueness(array) {
  const arr = array.filter((value, index) => array.indexOf(value) === index);
  if (array.length !== arr.length) {
    console.log("false");
  } else {
    console.log("true");
  }

  //useing Set method to find unique element in the array
  // console.log([...new Set(array)].length !== array.length ? "false" : "true");
}
const arrOne = [1, 4, 6, 2, 3];
checkUniqueness(arrOne);
