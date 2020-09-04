# function definition
def primeNumberFunction(number):
    # to determine a prime number it must be greater than 1
    if(number < 1):
        return False
    # looping through every number between 2 and the number given
    for i in range(2, number):
        # prime numbers are number which can only be completely divisible by 1 and the number itself
        # if it finds any number which can divide the given number apart from the number itself, return false
        # therefore it is not a prime number
        if(number % i == 0):
            return False
    # else if it successfully loops through all the numbers and finds none, therefore it is prime
    # therefore if it is a prime number, execution will not get to this point as it will return false as the line above
    return True
# fuunction call and printing to the screen
print(primeNumberFunction(13))