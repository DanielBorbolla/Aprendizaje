import random

inflacion_anual = (3.5)/100

ano_inicio = 2005
ano_final = 2037
sueldo_inicial = 12000
sueldo_actualizado = sueldo_inicial
for i in range(ano_inicio, ano_final):
    variacion = (random.uniform(1, 3))/100
    # también podemos usar random.random() pero este solo genera números entre 0 y 1
    inflacion_total = (inflacion_anual+variacion)
    sueldo_actualizado *= (1+inflacion_total)
    print("{: .2f}".format(round(inflacion_total*100, 2)))
    print("{: .2f}".format(round(sueldo_actualizado, 2)))
