from turtle import Turtle
FONT = ("Courier", 24, "normal")


class Score(Turtle):
    def __init__(self):
        super().__init__()
        self.score = 0
        self.penup()
        self.hideturtle()
        self.writescore()

    def writescore(self):
        self.goto(300, -280)
        self.clear()
        self.write(arg=(f"SCORE: {self.score}"), move=False,
                   align="center", font=(FONT))
