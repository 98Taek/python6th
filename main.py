# 명시적 타입 변환

a = 5
b = 2
value = a / b
print(type(value))
int_value = int(value)
print(int_value, type(int_value))

q = 20
u = '10'
r = q + int(u)
print(r, type(r))
r = str(q) + u
print(r, type(r))

n1 = 10.76
vn1 = int(n1)
print(vn1, type(vn1))

n5 = '멋쟁이 사자'
vn5 = tuple(n5)
print(vn5, type(vn5))
