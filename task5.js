function stringSpaceReplacement(stringValue){
    //create a new string valable holding empty drink
    let newValue = "";
    //looping through each alphabets
    for(let i =0;i<stringValue.length;i++){
        // if the alphabet of the current index is equals to space
        if(stringValue[i]==" "){
            //append % to the current string we have
            newValue = newValue + "%";
        }else{
            //else append the new string by the value
            newValue = newValue + stringValue[i];
        }
    }
    //return thr new string
    return newValue;
}

console.log(stringSpaceReplacement("yy u"));
