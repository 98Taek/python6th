def add():
    x = 10
    y = 20
    c = x + y
    return c


sum1 = add()
print(sum1)

def add():
    x = 10
    y = 40
    return x + y


sum2 = add()
print(sum2)

def add(y):
    x = 10
    return x + y


sum3 = add(10)
print(sum3)

def add(y):
    x = 10
    c = x + y
    d = y - x
    return c, d, 50


sum4, sub1, a = add(20)
print(sum4, sub1, a)