function Dog(name) {
  this.name = name;
}
//Properties in the prototype are shared among ALL instances.
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");
