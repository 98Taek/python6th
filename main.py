def pw(x, y):
    z = x ** y
    print(z)


pw(2, 5)


def show(name, age=27):
    print(f'Name: {name} Age: {age}')


show('멋쟁이사자', 26)
show(age=26, name='멋쟁이사자')
show(name='멋쟁이사자')


