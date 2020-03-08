let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // looks for a single character of any number between zero and nine.
let result = movieName.match(numRegex).length;
