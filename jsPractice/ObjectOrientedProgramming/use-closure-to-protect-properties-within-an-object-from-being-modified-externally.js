function Bird() {
  let weight = 15;
  this.getWeight = function(){
    return weight;
  };
}
/*  In JavaScript, a function always has access to the context in which it was created. 
This is called closure. */