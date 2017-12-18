function isIsogram(str) {
    let word = str.split("");
    console.log(str, ' ', word.indexOf("a", 0));
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[i], index = 0) > -1) {
            index = i + 1;
            if ((word.indexOf(word[i].toUpperCase(), index) > -1) || (word.indexOf(word[i].toLowerCase(), index) > -1)) {
                return false;
            }
        }
    }
    console.log(word);
    return true;
}

isIsogram("Dermatoglyphics") //  true );
isIsogram("isogram") //  true );
isIsogram("aba") //  false, "same chars may not be adjacent" );
isIsogram("moOse") //  false, "same chars may not be same case" );
isIsogram("isIsogram") //  false );
isIsogram("") //  true, "an empty string is a valid isogram" );