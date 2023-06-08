def val(x):
    print('Inside:', x, id(x))
    x += 1
    print('Inside After:', x, id(x))


x = 10
print('Before Calling:', x, id(x))
val(10)
print('After Calling:', x, id(x))