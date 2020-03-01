let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // + is used to find characters that occur one or more times
let result = difficultSpelling.match(myRegex);
