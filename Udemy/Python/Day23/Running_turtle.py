from turtle import Turtle


class RunningTurtle(Turtle):
    def __init__(self):
        super().__init__()
        self.shape("turtle")
        self.penup()
        self.color("black")
        self.restart()
        self.seth(90)

    def restart(self):
        self.goto(0, -270)

    def up(self):
        self.seth(90)
        self.fd(10)

    def down(self):
        self.seth(270)
        self.fd(10)

    def left(self):
        self.seth(180)
        self.fd(10)

    def right(self):
        self.seth(0)
        self.fd(10)
