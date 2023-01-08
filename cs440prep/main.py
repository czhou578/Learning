# print('jasdfadsf')
# print("asdfasdf")
print('asdfadf'[-1])


print('asdfadf'[-1:-3])
print('asdfadf'[1:3])

print('hi' 'colin')

print('hello'[1:])
print(len("hello"[1:]))

# strings are immutable

squares = [1, 4, 9, 16, 25]
squares2 = [1, 2, 9, 16, 25]
print(len(squares[2:]))
print([squares, squares2])

print(squares[:])  # shallow copy

word = "hi"
word = word + "hi"
print(word)

words = ['cat', 'window', 'defenestrate']

for w in words:
    if (w == 3):
        break
    print(len(w))
    print(w)

for l in range(len(words)):
    print(l)


def fib1(test=4):
    # print(test + 4)
    return test + 5


print("Hi Colin: " + str(fib1()))
print("Hi Colin: " + str(fib1(2)))

if ("cat" in words):
    print("this exists in the sequence")
