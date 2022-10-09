from tkinter import *

window = Tk()
window.title("primer ventana independiente")
window.minsize(width=500, height=300)

my_label = Label(text="I am a Label", font=("Arial", 24, "bold"))
# my_label.pack(side="left")
# my_label.place(x=100, y=0)
my_label.grid(column=0, row=0)


def clicked_button():
    my_input = window_input.get()
    my_label["text"] = my_input


#! es importante que comand no tenga paréntesis al final
button = Button(text="Click me Daddy", command=clicked_button)
# ? no se pueden mezclar pack con grid y se muestran bugs al mezclarlo con place
# ? lo importante con grid es la relación entre los números de los elementos. con 3 elementos da lo mismo si se ponen las columnas  0,1 y3 a 0,20,50
# button.pack()
button.grid(column=1, row=1)
new_button = Button(text="just for challenge")
new_button.grid(column=3, row=0)

window_input = Entry(width=10)
# window_input.pack()
window_input.grid(column=4, row=3)

#! con grid nos va a poner todos los elementos juntos para cambiarlo tenemos que cambiar la configuración ya sea de la ventana o de cada elemento
window.config(padx=20, pady=20)

window.mainloop()
