from turtle import Turtle
FONT = ("Courier", 24, "normal")


class Lives(Turtle):
    def __init__(self):
        super().__init__()
        self.lives = 5
        self.turtlelives = []
        self.hideturtle()
        self.penup()
        self.remaininglives()

    def loosinglive(self):
        self.lives -= 1
        for turtle in self.turtlelives:
            turtle.hideturtle()
        self.turtlelives.clear()
        self.remaininglives()

    def remaininglives(self):
        location = [-350, -280]
        self.clear()

        for _ in range(self.lives):

            live = Turtle(shape="turtle")
            live.color("black")
            live.penup()
            live.goto(location)
            live.seth(90)
            self.turtlelives.append(live)
            location[0] += 30

    def game_over(self):
        self.goto(0, 0)
        self.write(arg=(f"GAME OVER "), move=False,
                   align="center", font=("Arial", 80, "bold"))
