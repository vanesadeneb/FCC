let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
let glideMixin = function(obj){
  obj.glide = function(){
    console.log("I'm glidding!"); 
  };
};

glideMixin(bird);
glideMixin(boat);