import sys

sys.setrecursionlimit(3000)

i = 0


def myfun():
    global i
    i += 1
    print('My Function:', i)
    myfun()


myfun()
