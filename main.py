def generate_alphabet(start_letter, last_letter):
    start = ord(start_letter)
    end = ord(last_letter)
    while start <= end:
        yield chr(start)
        start += 1


runner = generate_alphabet('A', 'F')

for letter in runner:
    print(letter)