# 예제 1: 간단한 if 문
x = 5
if x > 3:
    print('x는 3보다 큽니다.')

# if else
age = 18
if age >= 18:
    print('성인입니다.')
else:
    print('미성년자입니다.')

# 중첩된 if else
score = 85
if score >= 90:
    print('A 등급')
else:
    if score >= 80:
        print('B 등급')
    else:
        if score >= 70:
            print('C 등급')
        else:
            print('D 등급')

# 예제 4: if elif
marks = 75
if marks >= 90:
    print('A')
elif marks >= 80:
    print('B')
elif marks >= 70:
    print('C')
else:
    print('D')

a = int(input('Enter Number Greater than 2: '))
if a >= 2:
    print('You have Entered:', a)
else:
    print('You have Wrong number:', a)

day = input('요일을 입력하세요: ')
if day == 'Mon':
    print('오늘은 월요일')
elif day == 'Tue':
    print('오늘은 화요일')
elif day == 'Wed':
    print('오늘은 수요일')
else:
    print('휴일')
