import random
from baraja import baraja


# def draw():
#     global count
#     global li
#     if count < 7:
#         card = li.pop(random.randint(0, (len(li)-1)))
#         count += 1
#     else:
#         li = [1, 2, 3, 4, 5, 6, 7, 8]
#         count = 1
#         card = li.pop(random.randint(0, (len(li)-1)))
#     return card


# cont = "y"
# count = 0
# li = [1, 2, 3, 4, 5, 6, 7, 8]
# while cont == "y":
#     print(draw())
#     print(li)
#     print(count)
#     cont = input("another card? ").lower()

# hu = [11, 11, 11]
# while 11 in hu and sum(hu) > 21:
#     hu.remove(11)
#     hu.append(1)

# print(hu)
# f = open("hi_score.txt", "r")
# x = int(f.read())
# print(x*5)
# f.close()
# f = open("hi_score.txt", "w")
# f.write(str(2*x))
# f.close()

x = baraja["C_as"][3]
print(x)
