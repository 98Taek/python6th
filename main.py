a = {10, 20, 30}
a = {10, 20, 30, 'abcd', '하이', 40}
a = {10, 20, 30, 'abcd', '하이', 40, 10, 20}
print(a)

b = set()
print(type(b))

a.add(50)
a.update([10, 60])
print(a)
a.remove(10)
a.discard(10)
a.discard(30)
print(a)

new_set = a.copy()
new_set.clear()
print(new_set)