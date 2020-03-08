let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; //  This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
let result = movieName.match(noNumRegex).length;
