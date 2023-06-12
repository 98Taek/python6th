try:
    result = 10 / 0
except ZeroDivisionError:
    print("Error")

print('Program continues')

try:
    number = int("Not a number")
    number2 = 5 + 'Not a number'
except ValueError:
    print("Error: ValueError")
except TypeError:
    print("Error: TypeError")