from turtle import Turtle, Screen
import random

tim = Turtle()
screen = Screen()

screen.colormode(255)
tim.speed(0)
tim.setpos(0, -300)


def rand_color():
    r = random.randint(0, 250)
    g = random.randint(0, 250)
    b = random.randint(0, 250)
    return r, g, b


def draw_circle(outer, inner):
    for degree in range(0, 360, outer):
        tim.circle(300, outer)
        for d in range(0, 360, inner):
            tim.circle(150, inner)
            tim.pencolor(rand_color())
            tim.circle(50)


draw_circle(30, 20)
screen.exitonclick()
