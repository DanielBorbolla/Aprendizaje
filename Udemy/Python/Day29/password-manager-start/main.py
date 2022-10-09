from tkinter import *
from tkinter import messagebox
import pandas
import pyperclip
import random
FONT_NAME = "Courier"
# ---------------------------- PASSWORD GENERATOR ------------------------------- #


def password_generator():
    import random
    password_entry.delete(0, END)
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
               'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

    char_list = [random.choice(letters) for _ in range(random.randint(8, 10))]
    symbols_list = [random.choice(symbols)
                    for _ in range(random.randint(2, 4))]
    numb_list = [random.choice(numbers) for _ in range(random.randint(2, 4))]

    password_list = char_list + symbols_list + numb_list

    random.shuffle(password_list)
    password = "".join(password_list)
    password_entry.insert(0, password)


# ---------------------------- SAVE PASSWORD ------------------------------- #


def save_password():
    archive = pandas.read_csv("passwords.csv")
    website = website_entry.get()
    email = email_entry.get()
    password = password_entry.get()
    if len(website) == 0 or len(email) == 0 or len(password) == 0:
        messagebox.showinfo(title="incomplete info",
                            message="You must fill all the entries to continue")
        is_ok = False
    else:
        is_ok = messagebox.askokcancel(title=website, message=(
            f"is this info correct? \n Email: {email}\n Password: {password} \n save?"))
    if is_ok:
        new_entry = {
            "Website": [website],
            "Email": [email],
            "Password": [password]
        }
        df = pandas.DataFrame(new_entry, columns=[
                              "Website", "Email", "Password"])
        new_archive = pandas.concat([archive, df], ignore_index=True)
        new_archive.to_csv("passwords.csv", index=False)
        website_entry.delete(0, END)
        password_entry.delete(0, END)
        pyperclip.copy(password)

# ---------------------------- UI SETUP ------------------------------- #


window = Tk()
window.title("Password Manager")
window.config(padx=50, pady=50)
main_image = PhotoImage(file="password-manager-start/logo.png")
canvas = Canvas(width=200, height=200, highlightthickness=0)
canvas.create_image(100, 100, image=main_image)
canvas.grid(column=1, row=0)

#________________________________Labels______________________________________#
website_label = Label(text="Website", font=(FONT_NAME, 20, "bold"))
website_label.grid(column=0, row=1)
email_label = Label(text="Email/Username", font=(FONT_NAME, 20, "bold"))
email_label.grid(column=0, row=2)
password_label = Label(text="Password", font=(FONT_NAME, 20, "bold"))
password_label.grid(column=0, row=3)
#________________________________Buttons______________________________________#
generate_button = Button(text="Generate password",
                         font=(FONT_NAME, 10, "bold"), command=password_generator)
generate_button.grid(column=2, row=3)
add_button = Button(text="Add", font=(FONT_NAME, 20, "bold"),
                    width=20, command=save_password)
add_button.grid(column=1, row=4, columnspan=2)

#________________________________Entrys______________________________________#
website_entry = Entry(width=35)
website_entry.grid(column=1, row=1, columnspan=2)
website_entry.focus()
email_entry = Entry(width=35)
email_entry.grid(column=1, row=2, columnspan=2)
email_entry.insert(0, "danielborbollasuarez88@gmail.com")
password_entry = Entry(width=21)
password_entry.grid(column=1, row=3)


window.mainloop()
