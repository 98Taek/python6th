a = 50


def show():
    a = 10
    print('A:', a)


show()
print('A:', a)


def show2():
    global a
    print('show2 A:', a)
    a = 20
    print('show2 a:', a)


show2()
print('A:', 2)
