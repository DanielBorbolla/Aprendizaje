import re
from turtle import Turtle, Screen
import random

tim = Turtle()
screen = Screen()
tim.hideturtle()
screen.colormode(255)
tim.speed(0)
tim.penup()
tim.setpos(-300, -300)


def rand_color():
    r = random.randint(0, 250)
    g = random.randint(0, 250)
    b = random.randint(0, 250)
    return r, g, b


def painting_dots(size, space):
    repetition = int(600/space)
    for i in range(repetition+1):
        for _ in range(repetition):
            tim.dot(size, rand_color())
            tim.fd(space)
        tim.dot(size, rand_color())

        if tim.heading() == 0:
            tim.left(90)
            tim.fd(space)
            tim.left(90)
        else:
            tim.rt(90)
            tim.fd(space)
            tim.rt(90)


painting_dots(10, 20)
screen.exitonclick()
