# function definition
def evenOddArray(array):
    # declearing a variable holding the sum of all even number initializing to zero
    sum_of_even = 0 
    # declearing a variable holding the sum of all odd number initializing to zero
    sum_of_odd = 0 
     # in order to check for even or odd, array length must be greater than zero. 
     # the len() function returns the number of element in an array.
    if(len(array) > 0):
        # lopping through array from satarting index zero, for an array of 10 element,
        #  highest index=9, therefore decrement len() by 1 preventing IndexError
        for i in range(0, len(array)-1): 
            # the remainder of every even number divided by 2 is zero. 
            if(array[i] % 2 == 0):
                # recursively assigning the sum_of_even number by the current value which it holds incrementing by the even number found.
                sum_of_even = sum_of_even + array[i]
            # if remainder > 0, therefore it is odd
            else:
                # recursively assigning the sum_of_odd number by the current value which it holds incrementing by the odd number found.
                sum_of_odd = sum_of_odd + array[i]
    # function returning and array of two indexes, 
    # first index holding the total of even number found
    # second index holding the total of odd number found
    return [sum_of_even, sum_of_odd]
# function call and printing to the console.
print(evenOddArray([1,2,3,4,5,6,7,8,9,10]))