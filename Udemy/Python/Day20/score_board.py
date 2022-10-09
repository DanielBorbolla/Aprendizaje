import imp

from turtle import Turtle


class ScoreBoard(Turtle):
    def __init__(self):
        super().__init__()
        self.score = 0
        self.color("white")
        self.penup()
        self.goto(0, 360)
        self.hideturtle()
        self.gethigh_score()
        self.update_scoreboard()

    def gethigh_score(self):
        with open("high_score.txt") as HS:
            highscore = int(HS.read())
        self.high_score = highscore

    def update_scoreboard(self):

        self.gethigh_score()
        self.clear()
        self.write(arg=(f"score: {self.score}  High Score: {self.high_score}"), move=False,
                   align="center", font=("Arial", 20, "bold"))

    def add_score(self):
        self.score += 1
        self.update_scoreboard()

    def reset(self):
        if self.score > self.high_score:
            with open("high_score.txt", "w") as HS:
                HS.write(str(self.score))
        self.score = 0
        self.update_scoreboard()

    # def game_over(self):
    #     self.goto(0, 0)
    #     self.write(arg=(f"GAME OVER \n final score: {self.score}"), move=False,
    #                align="center", font=("Arial", 40, "bold"))
