function numOf3Func(number){
    //create a value of character 3
    _3 = '3';
    // create an object to hold number count and the list of numbers found
    let obj = {count: 0, numbers: []};
    //loop from 2 to the number
    for(let i=2; i<=number; i++){
        //convert each number to  string and check if it include our value of '3'
        // if yes increase count and add it to the list
        if(i.toString().includes(_3)){
            obj.count++;
            obj.numbers.push(numstr);
        }
    }
    //return object
    return obj;
}
// print object
console.log(numOf3Func(35));