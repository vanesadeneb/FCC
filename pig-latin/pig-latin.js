function translatePigLatin(str) {
  var consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  var vowel = ['a','e','i','o','u'];
  var firstLetter =str[0];
  var resto = str.substr(1);
  var newPhrase = "";

  if(consonant.includes(firstLetter) && consonant.includes(str[1])){
    newPhrase = str.substr(2) + str.substr(0,2) + "ay";
    return newPhrase;
  }else if(consonant.includes(firstLetter)){
    newPhrase = resto + firstLetter + "ay";
    return newPhrase;
  } 
  if(vowel.includes(firstLetter)){
    newPhrase = str + "way";
    return newPhrase; 
  }

}

translatePigLatin("glove");