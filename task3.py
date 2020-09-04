# function definition
def primeNumberArray(array):
    found_prime_number_array = []
    if(len(array) > 0):
        # lopping through array from satarting index zero, for an array of 10 element,
        #  highest index=9, therefore decrement len() by 1 preventing IndexError
        for i in range(0, len(array)-1):
            # setting a boolean variable to tell us when that element at the array of that index is prime
            # we say ok anytime you get to an index create a variable and lets assume that variable says true, that array is not prime
            isNotPtime = False
            # we now have to loop between 2 to that number to know if its actually prime
            # no we have to test to see if the number at this index is one, cause one cannot be a prime.
            if(array[i] >1):
                for j in range(2, array[i]):
                # if we find any number that can divide that number completely, if we do find anyone, we change the value of "isNotPtime"
                    if(array[i] % j == 0):
                        isNotPtime = True
                    # now when we get here we have finish looping from 2 to that number. 
                    # now we have to check that variable to knw  if that number is prime
                    # if the variable doesnt change, that is it remains the same, then the number is prime,
                    # because only if it found any other number that could divide it, then it would have changed
                if(isNotPtime == False):
                    # if it was the same, then append the value to the array we created at the start to save all prime numbers
                    found_prime_number_array.append(array[i])
    # at the end we return that array that is storing all prime numbers for us.
    return found_prime_number_array
# function call and printing to the console.
print(primeNumberArray([1,2,3,4,5,6,7,8,9,10]))