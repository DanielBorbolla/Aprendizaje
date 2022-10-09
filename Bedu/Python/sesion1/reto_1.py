from tkinter import *
from tkinter import messagebox

window = Tk()
window.title("Password Manager")
window.config(padx=50, pady=50)


def suma():
    n1 = int(num1.get())
    n2 = int(num2.get())
    resultado = n1+n2
    messagebox.showinfo(title="Resultado",
                        message=resultado)


def resta():
    n1 = int(num1.get())
    n2 = int(num2.get())
    resultado = n1-n2
    messagebox.showinfo(title="Resultado",
                        message=resultado)


def multiplicacion():
    n1 = int(num1.get())
    n2 = int(num2.get())
    resultado = n1*n2
    messagebox.showinfo(title="Resultado",
                        message=resultado)


def divicion():
    n1 = int(num1.get())
    n2 = int(num2.get())
    resultado = n1/n2
    messagebox.showinfo(title="Resultado",
                        message=resultado)


num1 = Entry()
num1.grid(column=0, row=0, columnspan=2)
num2 = Entry()
num2.grid(column=2, row=0, columnspan=2)

add = Button(text="+", command=suma)
rest = Button(text="-", command=resta)
multiply = Button(text="X", command=multiplicacion)
divide = Button(text="/", command=divicion)
add.grid(column=0, row=1)
rest.grid(column=1, row=1)
multiply.grid(column=2, row=1)
divide.grid(column=3, row=1)
window.mainloop()
