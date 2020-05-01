function htmlColorNames(arr) {
  // start index in position 0, remove the 2 consecutives elements and replace with 'DarkSalmon','BlanchedAlmond' in their respective places.
  arr.splice(0,2,'DarkSalmon','BlanchedAlmond')
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
