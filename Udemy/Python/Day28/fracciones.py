

denom = int(input("ingrese el número objetivo"))

for num in range(denom):
    numerador = num
    denominador = denom
    for mcd in range(numerador, 1, -1):
        if numerador % mcd == 0 and denominador % mcd == 0:
            numerador /= mcd
            denominador /= mcd

    print(f"{num}:   {int(numerador)}/{int(denominador)}")
