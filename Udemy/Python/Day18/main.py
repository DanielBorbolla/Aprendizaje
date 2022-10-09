
from turtle import Turtle, Screen
import random
import math

tim = Turtle()
tim.shape("turtle")
tim.color("blue")
screen = Screen()
for i in range(0, 4):
    tim.fd(100)
    tim.rt(90)

tim.lt(90)
for _ in range(30):
    tim.fd(10)
    if tim.isdown():
        tim.penup()
    else:
        tim.pendown()
tim.rt(90)
screen.colormode(255)
for i in range(3, 36):
    angle = 360/i

    tim.pencolor(random.randint(0, 250), random.randint(
        0, 250), random.randint(0, 250))
    for _ in range(i):
        tim.fd(100)
        tim.rt(angle)


screen.exitonclick()
