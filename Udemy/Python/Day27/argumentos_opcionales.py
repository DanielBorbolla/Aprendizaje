# # ! *args
# ! fallo total en el uso de *args porque mi input numers me lo toma como solo una variable y trata de sumar variables inexistentes al tuple de entrada
def add(args):
    return sum(args)


numers = input("write the numbers to add: ").split()
numers = [int(num)for num in numers]
numers = tuple(numers)
# numers = (1, 2, 3, 4)

# print(numers)
result = add(numers)

print(result)
