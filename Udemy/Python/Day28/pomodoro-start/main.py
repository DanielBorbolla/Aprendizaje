
from tkinter import *

import math

# ---------------------------- CONSTANTS ------------------------------- #
PINK = "#e2979c"
RED = "#e7305b"
GREEN = "#9bdeac"
YELLOW = "#f7f5dd"
FONT_NAME = "Courier"
WORK_MIN = 25
SHORT_BREAK_MIN = 5
LONG_BREAK_MIN = 20
reptilians = 0
ticking = None
# ---------------------------- TIMER RESET ------------------------------- #


def reset_timer():
    global reptilians
    window.after_cancel(ticking)
    canvas.itemconfig(tile, text="Timer", fill=GREEN)
    reptilians = 0
    check_marks.config(text="✓"*math.floor(reptilians/2))
    canvas.itemconfig(watch, text="00:00")

# ---------------------------- TIMER MECHANISM ------------------------------- #


def timer():
    global reptilians
    reptilians += 1
    if reptilians < 9:
        if reptilians % 2 == 0:
            if reptilians % 8 == 0:
                count_down(LONG_BREAK_MIN*60)
                canvas.itemconfig(tile, text="Break", fill=RED)
                # count_down(8)
            else:
                canvas.itemconfig(tile, text="Break", fill=PINK)
                count_down(SHORT_BREAK_MIN*60)
                # count_down(5)
        else:
            canvas.itemconfig(tile, text="WORK BITCH", fill=GREEN)
            count_down(WORK_MIN*60)
            # count_down(10)
    else:
        reptilians = 0

# ---------------------------- COUNTDOWN MECHANISM ------------------------------- #


def count_down(count):
    global ticking
    minutes = math.floor(count/60)
    seconds = count % 60
    if len(str(seconds)) == 1:
        seconds = f"0{seconds}"
    if len(str(minutes)) == 1:
        minutes = f"0{minutes}"
    canvas.itemconfig(watch, text=f"{minutes}:{seconds}")
    if count > 0:
        ticking = window.after(1000, count_down, count-1)
    else:
        timer()

        check_marks.config(text="✓"*math.floor(reptilians/2))


# ---------------------------- UI SETUP ------------------------------- #
window = Tk()
window.title("Pomodoro")
window.minsize(width=300, height=350)
window.config(bg=YELLOW)
tomato_photo = PhotoImage(file="pomodoro-start/tomato.png")
canvas = Canvas(width=300, height=300, background=YELLOW, highlightthickness=0)
canvas.create_image(150, 170, image=tomato_photo)
watch = canvas.create_text(150, 170, text="00:00", justify="center",
                           font=(FONT_NAME, 52, "bold"), fill="white")

canvas.pack()
start = Button(canvas, text="Start",
               font=(FONT_NAME, 20, "bold"), command=timer)
start.config(highlightbackground=GREEN, fg="black", bd=8, relief=RAISED)
start.place(x=20, y=270)
reset = Button(canvas, text="Reset",  activebackground=YELLOW,
               font=(FONT_NAME, 20, "bold"))

reset.config(highlightbackground=GREEN, fg="black",
             bd=8, relief=RAISED, command=reset_timer)
reset.place(x=220, y=270)
tile = canvas.create_text(150, 40, text="Timer", justify="center",
                          font=(FONT_NAME, 52, "bold"), fill=GREEN)
check_marks = Label(text="", font=(FONT_NAME, 20, "bold"), bg=YELLOW)
check_marks.place(x=150, y=300)


window.mainloop()
