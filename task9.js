function palindrome(str) {
    //create a variable holding all values from A-Z, a-z, 0-9
    let re = /[^A-Za-z0-9]/g;
    // convert the given string to lower case and replace any value in the re variable with empty string
    str = str.toLowerCase().replace(re, '');
    // get length of the string
    let len = str.length;
    // loop through the string
    for (let i = 0; i < len/2; i++) {
        //divide string into 2 equal half
      if (str[i] !== str[len - 1 - i]) {
          return "Yes";
      }
    }
    return "No";
   }
console.log(palindrome("You are not to use the programming language’s existing function or method, if any"));