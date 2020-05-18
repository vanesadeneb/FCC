function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Using isPrototypeOf to check the prototype of beagle
Dog.prototype.isPrototypeOf(beagle);