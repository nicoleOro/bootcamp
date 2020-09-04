function StandardDeviation(numbersArr) {
    //--CALCULATE AVAREGE--
    let total = 0;
    //getting each key(also known as index) of each array
    for(let key in numbersArr) 
        // increasing the total by the kalue
       total += numbersArr[key];
       let meanVal = total / numbersArr.length;
    //--CALCULATE AVAREGE--
  
    //--CALCULATE STANDARD DEVIATION--
    var SDprep = 0;
    for(var key in numbersArr) 
       SDprep += Math.pow((parseFloat(numbersArr[key]) - meanVal),2);
    var SDresult = Math.sqrt(SDprep/numbersArr.length);
    //--CALCULATE STANDARD DEVIATION--
    return SDresult;
    
}
console.log(StandardDeviation([12, 13, 15, 13, 15]));