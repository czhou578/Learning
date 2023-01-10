import test
import json

knights = {'gallahad': 'the pure', 'robin': 'the brave'}
knights2 = {'gallahad': 'the pure', 'robin': 'the brave'}

for k, v in knights.items():
    print(k, v)

for k, v in enumerate(knights):  # prints out the indexes as well as values
    print(k, v)

for knights, knights2 in zip(knights, knights2):
    print('{0}, {1}' .format(knights, knights2))

basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
for f in sorted(basket):
    print(f)

print(test.add(1, 2))

# input and output

year = 2016
print(f'{year}')

print("hello, this is {0}".format("Colin"))

json.dumps([1, 'simple', 'list'])
