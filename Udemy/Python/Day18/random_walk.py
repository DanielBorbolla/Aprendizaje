from turtle import Turtle, Screen
import random
tam = Turtle()
tem = Turtle()
tim = Turtle()
tom = Turtle()
tum = Turtle()


screen = Screen()
screen.colormode(255)


turtles = [tam, tem, tim, tom, tum]
for t in turtles:
    t.penup()
    t.pensize(10)
    t.speed(0)
tam.setpos(180, 180)
tem.setpos(-180, 180)
tim.setpos(180, -180)
tom.setpos(-180, -180)

for t in turtles:
    t.pendown()


def rand_walk(turtle):
    global directions
    direction = random.choice(directions)
    turtle.setheading(direction)
    turtle.pencolor(random.randint(0, 250), random.randint(
        0, 250), random.randint(0, 250))
    turtle.fd(30)


directions = [0, 90, 180, 270]

for i in range(0, 10):
    for t in turtles:
        rand_walk(t)


screen.exitonclick()
