function Dog(name) {
  this.name = name;
}
//A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once.
Dog.prototype = {
  numLegs : 4,
  eat : function(){
    console.log("ñaam ñamm");
  },
  describe : function(){
    console.log("My name is " + this.name);
  }
};
