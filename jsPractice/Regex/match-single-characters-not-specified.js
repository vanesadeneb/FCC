let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // ^ matches all characters that are not a vowel or a number
let result = quoteSample.match(myRegex); // Change this line
