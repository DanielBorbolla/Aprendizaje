import colorgram

colors = colorgram.extract('puntos_pendejos.jpeg', 5)
muestra = []
for color in colors:
    r = color.rgb.r
    g = color.rgb.g
    b = color.rgb.b
    rgb = (r, g, b)
    muestra.append(rgb)
print(muestra)
