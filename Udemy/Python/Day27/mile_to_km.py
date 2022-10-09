
from tkinter import *


def calculation():
    miles = float(Miles.get())
    Km = miles*1.61
    label2["text"] = Km


window = Tk()
window.title("Mile to KM")
window.minsize(width=500, height=300)

label1 = Label(text="is equal to", font=("Arial", 24, "bold"))
label1.grid(column=0, row=1)
label2 = Label(text=0, font=("Arial", 24, "bold"))
label2.grid(column=1, row=1)
label3 = Label(text="Miles", font=("Arial", 24, "bold"))
label3.grid(column=2, row=0)
label4 = Label(text="KM", font=("Arial", 24, "bold"))
label4.grid(column=2, row=1)


button = Button(text="Calculate", command=calculation)
button.grid(column=1, row=2)


Miles = Entry(width=10)
Miles.grid(column=1, row=0)

window.config(padx=10, pady=10)

window.mainloop()
