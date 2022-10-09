# fib = 0
# num = 1
# while fib < 1000:
#     print(fib)
#     temp = fib + num
#     fib = num
#     num = temp
import os
os.system("clear")
fib = [0, 1]
i = 0
while fib[i+1] < 1000:
    b = fib[i]+fib[i+1]
    fib.append(b)
    i += 1

print(fib)
