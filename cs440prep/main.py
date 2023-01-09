from collections import deque

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

# optional arguments for functions


def colin(voltage, colin=3, cosun=4):
    return voltage + colin + cosun


print(colin(12, 4))
print(colin(12, 4, 10))


def cheeseshop(kind, *arguments, **keywords):
    print("-- Do you have any", kind, "?")
    print("-- I'm sorry, we're all out of", kind)
    for arg in arguments:
        print(arg)
    print("-" * 40)
    for kw in keywords:
        print(kw, ":", keywords[kw])


cheeseshop("Limburger", "It's very runny, sir.",
           "It's really very, VERY runny, sir.",
           shopkeeper="Michael Palin",
           client="John Cleese",
           sketch="Cheese Shop Sketch")


def colin3(name, *siblings, **places):
    print("Here is ", name)
    for sib in siblings:
        print("sibling 1", sib)

    for place in places:
        print("They live in ", places[place])


colin3("Colin", "Cobin", "Cosun", place="cupertino", places="Issaquah")

# only positional parameters


def colin4(name, sibling, /, **place):
    print("here is ", name, "his sibling is ", sibling, "place is ", place)


colin4("colin", "cosun", place="issaquah")
# colin4("cosun")


def colin5(*, arg, arg2):
    return arg + arg2


# print(colin5(arg=3, bye=5))


def testPrint():
    """
        this is truly great
    """
    pass


print(testPrint.__doc__)  # print the comments

queue = deque(["Eric", "Colin", "Cosun"])
queue.append("Colin")
queue.popleft()
queue.pop()
print(queue)
del queue

queue = [1, 2, 3, 4, 54]
del queue[2:4]
print(queue)
del queue

tuples = 123, 456, "Colin"

print(tuples)
del tuples

tuples = ([12], [13])
print(tuples)

tuples = ()  # empty tuple
tuples2 = 1,

print(tuples2)
# tuples[1] = 0

basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
print('orange' in basket)

tel = {'jack': 4098, 'sape': 4139}  # dictionary, basically a js object
tel['guido'] = 1234
del tel['jack']

print(tel)
