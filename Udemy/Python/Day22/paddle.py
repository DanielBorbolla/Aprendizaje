from turtle import Turtle


class Paddle(Turtle):

    def __init__(self, side):
        super().__init__()
        self.side = side
        self.create_paddle()

    def create_paddle(self):
        if self.side == "L":
            xcor = -370
        else:
            xcor = 370

        self.paddle = Turtle(shape="square")
        self.paddle.penup()
        self.paddle.color("white")
        self.paddle.shapesize(stretch_len=5, stretch_wid=1)
        self.paddle.setheading(90)
        self.paddle.speed(0)
        self.paddle.goto(xcor, 0)

    def go_up(self):
        if self.paddle.ycor() < 260:
            self.paddle.setheading(90)
            self.paddle.fd(20)

    def go_down(self):
        if self.paddle.ycor() > -240:
            self.paddle.setheading(270)
            self.paddle.fd(20)
