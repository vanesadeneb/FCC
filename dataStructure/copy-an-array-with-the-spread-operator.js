function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // spread operator allows us to easily copy all of an array's elements
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
