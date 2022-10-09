from re import T
from turtle import Screen, Turtle, position, right
from paddle import Paddle
from ball import Ball
from score import ScoreBoard
import time


def pause_off():
    global pause
    pause = False


screen = Screen()
screen.setup(width=800, height=600)
screen.bgcolor("black")
screen.title("Pong")
screen.tracer(0)


left = Paddle("L")
right = Paddle("R")
ball = Ball()
score = ScoreBoard()
screen.update()
screen.listen()
screen.update()
screen.onkey(key="Up", fun=right.go_up)
screen.onkey(key="Down", fun=right.go_down)
screen.onkeypress(left.go_up, "e")
screen.onkeypress(left.go_down, "d")
screen.onkeypress(key="space", fun=pause_off)


speed = 10
pause = True


def game():
    global pause
    global speed
    if not pause:
        screen.update()
        ball.move()
    # rebote con los bordes
        if ball.ycor() > 260 or ball.ycor() < -260:
            ball.bounce()
    # golpe de la raqueta izquierda
        if ball.xcor() < -360 and ball.distance(left.paddle) < 60:

            speed -= 1
            ball.swing()
    # golpe de raqueta derecha
        if ball.xcor() > 360 and ball.distance(right.paddle) < 60:
            speed -= 1
            ball.swing()
    # Anotación Derecha
        if ball.xcor() > 380:
            score.left_score()
            ball.home()
            ball.starting_direction()
            screen.update()
            speed = 10
            pause = True

    # anotación Izquierda
        if ball.xcor() < -380:
            score.right_score()
            ball.home()
            ball.starting_direction()
            speed = 10
            screen.update()
            pause = True

    screen.ontimer(game, speed)


game()

screen.exitonclick()
