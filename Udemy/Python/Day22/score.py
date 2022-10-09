
from turtle import Turtle
import time


class ScoreBoard(Turtle):
    def __init__(self):
        super().__init__()
        self.score = [0, 0]
        self.color("white")
        self.penup()
        self.goto(0, 240)
        self.hideturtle()
        self.update_scoreboard()

    def update_scoreboard(self):
        self.write(arg=(f"{self.score[0]}               {self.score[1]}"), move=False,
                   align="center", font=("Arial", 40, "bold"))

    def left_score(self):
        self.score[0] += 1
        self.goto(0, 0)
        self.write(arg=(f"LEFT SCORED !!{self.score[0]}"), move=False,
                   align="center", font=("Arial", 60, "bold"))
        time.sleep(1)
        self.clear()
        self.goto(0, 240)
        self.update_scoreboard()

    def right_score(self):
        self.score[1] += 1
        self.goto(0, 0)
        self.write(arg=(f"RIGHT SCORED !!{self.score[1]}"), move=False,
                   align="center", font=("Arial", 60, "bold"))
        time.sleep(1)
        self.clear()
        self.goto(0, 240)
        self.update_scoreboard()
