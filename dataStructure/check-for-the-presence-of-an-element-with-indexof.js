function quickCheck(arr, elem) {
  //  that allows us to quickly and easily check for the presence of an element on an array, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
  if(arr.indexOf(elem) > -1){
    return true;
  }else{
    return false;
  }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
