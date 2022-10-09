import random
from threading import setprofile
from turtle import Turtle, Screen


def advance(runner):
    step = random.randint(0, 10)
    runner.fd(step)
    runner.lt(random.randint(0, 5))
    runner.fd(step)
    runner.rt(random.randint(0, 10))
    runner.fd(step)
    runner.lt(random.randint(0, 5))


red = Turtle()
orange = Turtle()
yellow = Turtle()
green = Turtle()
blue = Turtle()
purple = Turtle()
goal = Turtle()

racers = [red, orange, yellow, green, blue, purple]

for turtle in racers:
    turtle.penup()
    turtle.shape("turtle")
goal.hideturtle()
goal.penup()
goal.setpos(x=200, y=-440)
goal.pencolor("green")
goal.pendown()
goal.width(10)
goal.setheading(90)
goal.fd(980)


red.color("red")
orange.color("orange")
yellow.color("yellow")
green.color("green")
blue.color("blue")
purple.color("purple")


red.setpos(x=-340, y=180)
orange.setpos(x=-340, y=108)
yellow.setpos(x=-340, y=36)
green.setpos(x=-340, y=-36)
blue.setpos(x=-340, y=-108)
purple.setpos(x=-340, y=-180)

goal.pencolor("")
screen = Screen()
screen.setup(width=700, height=800)

racers_list = ["red", "orange", "yellow", "green", "blue", "purple"]
racers_dict = {"red": red, "orange": orange, "yellow": yellow,
               "green": green, "blue": blue, "purple": purple}
valid_input = False

while not valid_input:
    bet = screen.textinput(title="make your bet",
                           prompt="which color turtle will win the race?: \nred \norange \nyellow \ngreen \nblue \npurple")
    if bet in racers_list:
        valid_input = True
goal_reached = False
while not goal_reached:
    for racer in racers_list:
        advance(racers_dict[racer])
        if racers_dict[racer].xcor() > 200:
            winner = racer
            goal_reached = True
            if winner == bet:
                print(f"you won!! the {winner} turtle is the winner")
            else:
                print(f"you loose!! the {winner} turtle is the winner")
            break
        # racers_dict[bet].setheading(0)


screen.exitonclick()
