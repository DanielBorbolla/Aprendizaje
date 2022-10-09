n = {"0": 0, "1": 0, "2": 0, "3": 0, "4": 0,
     "5": 0, "6": 0, "7": 0, "8": 0, "9": 0}
for x in range(0, 1000):
    string = list(str(x))
    for numero, rep in n.items():
        for num in string:
            if num == numero:
                n[numero] += 1

print(n)
maxnum = 0
winner = ""
for numero, rep in n.items():
    if rep > maxnum:
        maxnum = rep
        winner = numero

print(winner)
