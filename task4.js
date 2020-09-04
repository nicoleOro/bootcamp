function passwordValidator(password){
    //creating a variable of all possible string values
    let allString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    //creating a variable of all possible numbers
    let allNum = "0123456789";
    //creating a variable to all possible characters
    let char = "~!@#$%^&*()_+=-{}[]|\:\"'<,>.?/";
    //creating an object with three fields which will stand as the boolean is string, number or character exists
    // we make all false and they will only change if we find any value that matches their test
    let obj = {isString: false, isNum: false, isChar: false};
    //we loop through the length oof the password inputed 
    for(let i =0;i<password.length;i++){
        // we check if the value at any index matches any value in the string pool
        if(allString.includes(password[i])){
            obj.is = true;
        }
        // we check if the value at any index matches any value in the number pool
        if(allNum.includes(password[i])){
            obj.isNum = true;
        }
        // we check if the value at any index matches any value in the character pool
        if(char.includes(password[i])){
            obj.isChar = true;
        }
    }
    //if only the string is true and all other is false, return strength level
    if(obj.is && !obj.isNum && !obj.isChar){
        return 0;
    }
    //if only the number is true and all other is false, return strength level
    if(!obj.is && obj.isNum && !obj.isChar){
        return 1;
    }
    //if only the character is true and all other is false, return strength level
    if(obj.is && obj.isNum && !obj.isChar){
        return 2;
    }
    //if all is true and all other is false, return strength level
    if(obj.is && obj.isNum && obj.isChar){
        return 3;
    }
}

console.log(passwordValidator("aa1=1"));