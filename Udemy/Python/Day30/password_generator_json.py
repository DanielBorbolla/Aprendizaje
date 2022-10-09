from tkinter import *
from tkinter import messagebox
import pandas
import pyperclip
import json
import random
FONT_NAME = "Courier"
#----------------------------- RETRIEVE PASSWORD -------------------------------- #


def retrieve_password():
    website = website_entry.get()
    website = website.capitalize()
    try:
        with open("data.json", "r") as json_data:
            data = json.load(json_data)
    except FileNotFoundError:
        messagebox.showinfo(title="Error",
                            message="No Data File Found")
    else:
        try:
            info = data[website]
        except KeyError:
            messagebox.showinfo(title="website error",
                                message="website password not found. \n try again")
        else:
            password = info["Password"][0]
            email = info["Email"][0]
            password_entry.delete(0, END)
            email_entry.delete(0, END)
            password_entry.insert(0, password)
            email_entry.insert(0, email)
            messagebox.showinfo(
                title="password", message=f"Email: {email} \n Password: {password}")
            pyperclip.copy(password)

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
    website = website_entry.get()
    email = email_entry.get()
    password = password_entry.get()
    website = website.capitalize()
    if len(website) == 0 or len(email) == 0 or len(password) == 0:
        messagebox.showinfo(title="incomplete info",
                            message="You must fill all the entries to continue")
    else:
        new_entry = {
            website: {
                "Email": [email],
                "Password": [password]
            }
        }
        try:
            with open("data.json", "r") as data_file:
                data = json.load(data_file)
                data.update(new_entry)
        except FileNotFoundError:
            data = new_entry
        finally:
            with open("data.json", "w") as data_file:
                json.dump(data, data_file, indent=4)
                website_entry.delete(0, END)
                password_entry.delete(0, END)
                pyperclip.copy(password)


# ---------------------------- UI SETUP ------------------------------- #


window = Tk()
window.title("Password Manager")
window.config(padx=50, pady=50)
main_image = PhotoImage(file="logo.png")
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
generate_button = Button(text="Generate password", width=21,
                         font=(FONT_NAME, 10, "bold"), command=password_generator)
generate_button.grid(column=2, row=3)
add_button = Button(text="Add", font=(FONT_NAME, 20, "bold"),
                    width=20, command=save_password)
add_button.grid(column=1, row=4, columnspan=2)
search_button = Button(text="Search", width=10, font=(
    FONT_NAME, 20, "bold"), command=retrieve_password)
search_button.grid(column=2, row=1)

#________________________________Entrys______________________________________#
website_entry = Entry(width=21)
website_entry.grid(column=1, row=1, columnspan=1)
website_entry.focus()
email_entry = Entry(width=35)
email_entry.grid(column=1, row=2, columnspan=2)
email_entry.insert(0, "danielborbollasuarez88@gmail.com")
password_entry = Entry(width=21)
password_entry.grid(column=1, row=3)


window.mainloop()
