first_name = "hi"
last_name = False

age = 2020 - int("202")
age = "2020" + str("202")

temperature = 10

if temperature > 10:
    print('greater then 10')
elif temperature < 10:
    print('less then 10')
else:
    print('asdkfja;sdf')

i = 1
while i < 5:
    print(i * '*')
    i += 1

numbers = [1, 2, 3, 4]
for item in numbers:
    print(item)

text = [3, 5, 7, 9]

for item in range(5, 10, 2):
    print(item)

test = (1, 3, 5)


def greet(first_name, last_name):
    print(f'hi {first_name}, {last_name}')


def save_user(**user):  # arbitrary number of arguments
    print(user)


print(save_user(id=1, name='john', age=22))

print(greet('colin', 'cosun'))
print(age)
print(first_name)
print(last_name)
print("hello world")

student = {'name': 'John', 'age': 25, 'courses': ['Math']}
student['testNum'] = 24
print(student)
