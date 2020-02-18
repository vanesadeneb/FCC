function rangeOfNumbers(startNum, endNum) {
  if(endNum <= startNum - 1){
    return [];
  }else{
    const rangeArray = rangeOfNumbers(startNum, endNum - 1);
    console.log(rangeArray);
    rangeArray.push(endNum);
    return rangeArray;
  }
}
console.log(rangeOfNumbers(1,5));