a = {10, 20, 30}
a = {10, 20, 30, 'abcd', '하이', 40}
a = {10, 20, 30, 'abcd', '하이', 40, 10, 20}
print(a)

new_set = a.copy()
print(new_set)

b = set()
print(type(b))

a.add(50)
a.update([10, 60])
print(a)
a.remove(10)
a.discard(10)
a.discard(30)
print(a)

intersection_a = a.intersection(new_set, a, b)
print(intersection_a)

union_a = a.union(new_set)
print('union_a =', union_a)

diff_a = a.difference(new_set)
print('diff_a =', diff_a)

print(b.issubset(a))

print(a.issuperset(b))

sym_a = a.symmetric_difference(new_set)
print('sym_a =', sym_a)