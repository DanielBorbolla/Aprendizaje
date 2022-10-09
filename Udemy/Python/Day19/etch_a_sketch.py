from turtle import Turtle, Screen

tim = Turtle()
screen = Screen()


def move_forwards():
    tim.forward(10)


def move_back():
    tim.backward(10)


def turn_left():
    tim.left(5)


def turn_right():
    tim.right(5)


def toggle():
    if tim.isdown():
        tim.penup()
    else:
        tim.pendown()


def errase():
    tim.goto(0, 0)
    tim.clear()


screen.listen()
screen.onkey(key="Up", fun=move_forwards)
screen.onkey(key="Left", fun=turn_left)
screen.onkey(key="Right", fun=turn_right)
screen.onkey(key="space", fun=toggle)
screen.onkey(key="Down", fun=move_back)
screen.onkey(key="c", fun=errase)


screen.exitonclick()
