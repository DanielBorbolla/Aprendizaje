def culculadora(*nums, op):
    resul = 0
    if op == "*":
        resul = 1
        for i in nums:
            resul *= i
    elif op == "+":
        resul = sum(nums)
    elif op == "-":
        resul = nums[0]
        for i in range(1, len(nums-1)):
            resul -= nums[i]
    elif op == "/":
        resul = nums[0]
        for i in range(1, len(nums-1)):
            resul = resul/nums[i]

    return resul


numeros = (input("Escriba los números "))
numeros = numeros.split(" ")
numeros = [int(numero) for numero in numeros]
operacion = input("escriba la operación ")
# print(operacion, type(operacion))
print(f"su resultado es: {culculadora(*numeros,op=operacion)}")
