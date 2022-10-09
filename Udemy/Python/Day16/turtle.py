import turtle
from turtle import delay
timmy = turtle.Turtle()
my_screen = turtle.Screen()
print(my_screen.canvheight)
my_screen.delay(80)

timmy.shape("turtle")
timmy.color("green")

timmy.forward(25)
timmy.right(45)
timmy.forward(25)
timmy.left(12)
timmy.forward(25)
timmy.right(57)
timmy.forward(25)
my_screen.exitonclick()
