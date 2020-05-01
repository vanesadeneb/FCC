function forecast(arr) {
  // extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'
  arr = arr.slice(2,4);
  return arr;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
