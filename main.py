# 변수선언
a = 10
b = 3.14
c = "Hello World"
d = [1, 2, 3]
e = (4, 5, 6)
f = {7, 8, 9}
g = {"apple": 1, "banana": 2, "orange": 3}

# 데이터 타입 출력
print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))
print(type(f))
print(type(g))

# 덧셈
a = 4
b = 2
total = a + b
print("a + b =", total)

# 뺄셈
a = 4
b = 2
total = a - b
print("a - b =", total)

# 곱셈
total = a * b
print("a * b =", total)

# 나눗셈
total = a / b
print("a / b =", total)

# 나머지 연산
a = 5
b = 2
total = a % b
print("a % b =", total)

# 거듭 제곱
total = a ** b
print("a ** b =", total)

# 몫 (양수)
total = a // b
print("a // b =", total)

# 몫 (음수)
a = -5
total = a // b
print("a // b =", total)

# 비교 연산자
a = 5
b = 2
print('a < b =', a < b)
print('a <= b =', a <= b)
print('a == b =', a == b)
print('a != b =', a != b)

# 논리 연산자
a = 5
b = 2
c = 3
d = 200
print('AND 연산자')
print('a > b and a > c =', a > b and a > c)
print('a > b and a < c =', a > b and a < c)
print('OR 연산자')
print('a > b or a < c =', a > b or a < c)
print('NOT 연산자')
print('not(a < b) =', not(a < b))

# 할당 연산자
a = 10
b = 20
m = 15
y = a + b
print(y)
m += 10
print(m)
m **= 2
print(m)
m //= 10
print(m)

# 비트 연산자
a = 10
b = 15
print('a: ', bin(a))
print('b: ', bin(b))
print('~a =', ~a, bin(~a))
print('a & b =', bin(a & b))
print('a<<2 =', a << 2)

# 멤버 in 연산자
st1 = 'Welcome to abcd'
print('to' in st1)
print('to' not in st1)
st2 = 'Welcome top abcd'
print('to' in st2)
print('to' not in st2)
st3 = 'Welcome to abcd'
print('sub' in st3)
print('sub' not in st3)

# is 연산자
a = 10
b = 10
print(a is b)
print(a is not b)
a = 10
b = '10'
print(a is b)
print(a is not b)