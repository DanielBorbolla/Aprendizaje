from turtle import Turtle
import random


class Ball(Turtle):
    def __init__(self):
        super().__init__()
        self.shape("circle")
        self.penup()
        self.color("green")
        self.speed(0)
        self.starting_direction()

    def starting_direction(self):
        direction = random.randint(0, 360)
        if direction == 90 or direction == 270:
            direction += 5

        self.seth(direction)

    def move(self):
        self.fd(2)

    def bounce(self):
        angle = self.heading()
        corrected_angle = abs(angle-360)
        self.seth(corrected_angle)

    def swing(self):
        randomizer = random.randint(-10, 10)
        if self.heading() < 180:
            self.seth(abs(self.heading()-180+randomizer))
        else:
            self.seth(abs((360-self.heading())+180+randomizer))
