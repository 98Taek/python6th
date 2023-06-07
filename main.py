i = 0
while i < 10:
    i += 1
    print('i:', i)
else:
    print('else')

# while True:
#     a = input('Enter a number:')
#     if a == 0:
#         break
#     print('a')
# else:
#     print('else')

a = 2
while a <= 20:
    print(a)
    a += 2
print('코드 종료')

a = 1
while a <= 10:
    print(a)
    a += 1
else:
    print('while 조건이 거짓')
print('코드 종료')

# while True:
#     print('멋쟁이 사자')
# print('코드 종료')

i = 0
while True:
    i += 1
    print(i)
    if i == 5:
        break
print('코드 종료')

# 중첩
i = 1
while i <= 3:
    print('Outer Loop', i)
    i += 1
    j = 1
    while j <= 5:
        print('Inner Loop', j)
        j += 1
print('코드 종료')