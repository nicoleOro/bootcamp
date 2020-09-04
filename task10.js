function modeCharacter(stringValue){
    // spliting the string value to an array holding each alphabet
    let arrCharacter = stringValue.split();
    // if the character lenth is zero eg empty string, return null
    if(arrCharacter.length == 0){
        return null;
    }
    //create an object of each character it finds to hold the character and the count
    let characterMap = {};
    // we say thr largest character we find from the start is the first character because for it to get here and not have returned null,
    // as line 6, there is an index of zero
    let maxElement = stringValue[0]; 
    //give our max count 1, cause we found one
    let maxCount = 1; 
    // looping through each element in the character
    for(let i=0; i<stringValue.length;i++){
        // we give the current index to a varaiable to hold
        let el = stringValue[i];
        // we check if the value is null, we set the characterMap to 1
        if(characterMap[el] == null){
            characterMap[el] = 1;
        }else{
            //else we increment the value which exists
            characterMap[el]++;
        }
        // if number is greater than our maxcount
        if(characterMap[el]> maxCount){
            //assign our max elemnt the new value found
            maxElement = el;
            //assign our max count the new value found
            maxCount = characterMap[el];
        }
    }
    //return the element
    return maxElement;
}

console.log(modeCharacter("afhuusnimr443o0sggg"));
