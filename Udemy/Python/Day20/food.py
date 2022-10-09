import imp
from turtle import Turtle
import random


class Food(Turtle):

    def __init__(self):
        super().__init__()
        self.shape("circle")
        self.penup()
        self.shapesize(stretch_len=0.5, stretch_wid=0.5)
        self.color("green")
        self.speed(0)
        self.new_food()

    def new_food(self):
        randX = random.randint(-360, 360)
        randY = random.randint(-360, 360)
        self.goto(randX, randY)
