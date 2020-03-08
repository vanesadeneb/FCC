let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // the opposite of alphanumerics.
let result = quoteSample.match(nonAlphabetRegex).length;
