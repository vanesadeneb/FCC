function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Inherit Behaviors from a Supertype (or parent)
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);