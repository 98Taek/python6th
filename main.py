# 사용자 입력으로 리스트 만들기

user_input_list = []
num_elements = int(input('Enter Number of element: '))
for i in range(num_elements):
    user_input_list.append(input('Enter element: '))

print('User Input List:')
for element in user_input_list:
    print(element)