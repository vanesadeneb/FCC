let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // the same results instead write /[A-Za-z0-9_]+/
let result = quoteSample.match(alphabetRegexV2).length;
