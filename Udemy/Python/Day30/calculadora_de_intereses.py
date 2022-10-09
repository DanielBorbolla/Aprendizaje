from tkinter import *
from tkinter import messagebox


# ---------------------------- Calculate ------------------------------- #
def calculate():
    name = nombre.get()
    interest = (float(tasa.get())/100)
    ammount = float(deuda.get())
    term = int(plazo.get())
    mensual_rate = interest/12
    denominador = 1-((1+mensual_rate)**-term)
    mensualidad = (ammount*mensual_rate)/denominador
    pago_final = mensualidad*term
    messagebox.showinfo(
        title="Pago mensual", message=f"{name} su pago mensual sería de:\n {mensualidad}\n terminaría pagando {pago_final}")


# ---------------------------- UI SETUP ------------------------------- #
window = Tk()
window.title("Calculadora de Pagos")
window.config(padx=50, pady=50)

#________________________________Entrys______________________________________#

nombre = Entry()
nombre.grid(column=1, row=0)
tasa = Entry()
tasa.grid(column=3, row=0)
deuda = Entry()
deuda.grid(column=1, row=1)
plazo = Entry()
plazo.grid(column=3, row=1)


#________________________________Labels______________________________________#


label_plazo = Label(text="Plazo deseado en Meses")
label_deuda = Label(text="Deuda")
label_tasa = Label(text="Tasa Anual de Interés")
label_nombre = Label(text="Nombre de Usuario")
label_nombre.grid(column=0, row=0)
label_tasa.grid(column=2, row=0)
label_deuda.grid(column=0, row=1)
label_plazo.grid(column=2, row=1)


#________________________________Buttons______________________________________#

calcular = Button(text="Calcular", command=calculate)
calcular.grid(column=3, row=2)
# ---------------------------- Close Window ------------------------------- #

window.mainloop()
