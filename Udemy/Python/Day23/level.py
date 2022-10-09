from turtle import Turtle
FONT = ("Courier", 24, "normal")


class Level(Turtle):
    def __init__(self):
        super().__init__()
        self.level = 1
        self.penup()
        self.hideturtle()
        self.writelevel()

    def level_up(self):
        self.level += 1

    def writelevel(self):
        self.goto(-300, 250)
        self.clear()
        self.write(arg=(f"LEVEL: {self.level}"), move=False,
                   align="center", font=(FONT))
