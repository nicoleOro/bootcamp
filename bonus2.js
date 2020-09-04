function consonantReplacement(words){
    //list of all consonants
    let allConsonant = "bcdfghjklmnpqrstvwxyz";
    //creating a the new word variable of empty string
    let newConsonantWord = "";
    //looping though all indexes to get each alphabet
    for(let i=0;i<words.length;i++){
        //if the variable holding all consonant includes the word at that index
        // includes is an inbuild javascript function which returns true, if the string include an alphabet else false
        if(allConsonant.includes(words[i])){
            //finding the index of that value in the variable holding all consonants
            let indexOfTheConsonant = allConsonant.indexOf(words[i]);
            // if true, check if that is the last index, if it is, append to the new string the value 'b' first consonant
            if(indexOfTheConsonant == allConsonant.length-1){
                newConsonantWord = newConsonantWord + allConsonant[0];
            }else{
                //else replace append with the next consonant
                newConsonantWord = newConsonantWord + allConsonant[indexOfTheConsonant + 1];
            }
        }else{
            //if it is not a consonant, append the vowel
            newConsonantWord = newConsonantWord + words[i];
        }
    }
    //return new string
    return newConsonantWord;
}
console.log(consonantReplacement("hello world"));