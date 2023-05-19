import random

inflacion_anual = (3.5)/100

ano_inicio = 2006
ano_final = 2023
sueldo_inicial = 24000
sueldo_actualizado = sueldo_inicial
for i in range(ano_inicio, ano_final):
    variacion = (random.uniform(2, 7))/100
    # también podemos usar random.random() pero este solo genera números entre 0 y 1
    inflacion_total = (inflacion_anual+variacion)
    sueldo_actualizado *= (1+inflacion_total)
    print("{: .2f}".format(round(inflacion_total*100, 2)))
    print("{: .2f}".format(round(sueldo_actualizado, 2)))
