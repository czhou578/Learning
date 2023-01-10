import numpy as np

arr = np.array([1, 2, 3, 4])
print(arr)
print("this works: ", arr[:2])
print("this works2: ", arr[-1:0])
print(arr.dtype)


arr = np.array([[1, 2, 3, 4], [1, 2, 3, 4]])
print(arr)

arr = np.array([[[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]])
print(arr)
print(arr.ndim)

arr = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]])
print('Last element from 2nd dim: ', arr[1, -1])

print(arr[1:3])


arr = np.array([1, 0, 3])
newarr = arr.astype(bool)

print(newarr)
