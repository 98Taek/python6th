b = (10)
c = (10,)
print(b)
print(c)

d = (10, 20, 30, 40)
e = (10, 20, -50, 21.3, '멋쟁이사자')
f = 1, 10, 20, -50, 21.3, '멋쟁이사자'

print(d)
print(e)
print(f)

print(f[1])
print(f[2])
print(f[3])
print(f[4])

print(f[:3])
print(f[1:4])
print(f[3:])

print(c + d)
print(c + f)

g = c + f
print(g)
print(f * 5)
print(-10 in f)
h = 10, 20, -50, 20
print(min(h), max(h))
print(h.count(20))
print(h.index(20))
sorted_a = sorted(h)
print(sorted_a)

list_h = list(h)
print(list_h)

tuple_h = tuple(list_h)
print(tuple_h)

nested_tuple = ((1, 2, 3), (4, 5, 6), (7, 8, 9))
print(nested_tuple)