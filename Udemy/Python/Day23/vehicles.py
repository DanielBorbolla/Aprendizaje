from turtle import Turtle
import random

COLORS = ["red", "orange", "yellow", "brown", "blue", "purple"]


class Truck(Turtle):
    def __init__(self):
        super().__init__()

        self.line1 = []
        self.line2 = []
        self.line3 = []
        self.line4 = []
        self.line5 = []
        self.line6 = []
        self.line7 = []
        self.line8 = []
        self.line9 = []
        self.line10 = []
        self.line11 = []
        self.line12 = []
        self.line13 = []
        self.line14 = []
        self.line15 = []

        self.hideturtle()
        self.first_line()
        self.second_line()
        self.third_line()
        self.fourth_line()
        self.fifth_line()
        self.sixth_line()
        self.seventh_line()
        self.eighth_line()
        self.ninth_line()
        self.tenth_line()
        self.eleventh_line()
        self.twelfth_line()
        self.thirteenth_line()
        self.fourteenth_line()
        self.fifteenth_line()

    def first_line(self):
        xstart = 450
        for _ in range(5):
            self.truck = Turtle(shape="square")
            self.truck.seth(180)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=4, stretch_wid=1)
            self.truck.goto(xstart, -230)
            self.line1.append(self.truck)
            xstart -= 180

    def second_line(self):
        xstart = 450
        for _ in range(9):
            self.truck = Turtle(shape="square")
            self.truck.seth(180)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=2, stretch_wid=1)
            self.truck.goto(xstart, -210)
            self.line2.append(self.truck)
            xstart -= 100

    def third_line(self):
        xstart = -450
        for _ in range(9):
            self.truck = Turtle(shape="square")
            self.truck.seth(0)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=2, stretch_wid=1)
            self.truck.goto(xstart, -150)
            self.line3.append(self.truck)
            xstart += 100

    def fourth_line(self):
        xstart = 450
        for _ in range(5):
            self.truck = Turtle(shape="square")
            self.truck.seth(180)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=4, stretch_wid=1)
            self.truck.goto(xstart, -130)
            self.line4.append(self.truck)
            xstart -= 180

    def fifth_line(self):
        xstart = -450
        for _ in range(8):
            self.truck = Turtle(shape="square")
            self.truck.seth(0)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=2, stretch_wid=1)
            self.truck.goto(xstart, -110)
            self.line5.append(self.truck)
            xstart += 112.5

    def sixth_line(self):
        xstart = 450
        for _ in range(5):
            self.truck = Turtle(shape="square")
            self.truck.seth(180)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=2, stretch_wid=1)
            self.truck.goto(xstart, -50)
            self.line6.append(self.truck)
            xstart -= 180

    def seventh_line(self):
        xstart = -450
        for _ in range(5):
            self.truck = Turtle(shape="square")
            self.truck.seth(0)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=2, stretch_wid=1)
            self.truck.goto(xstart, -10)
            self.line7.append(self.truck)
            xstart += 180

    def eighth_line(self):
        xstart = 450
        for _ in range(6):
            self.truck = Turtle(shape="square")
            self.truck.seth(180)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=4, stretch_wid=1)
            self.truck.goto(xstart, 50)
            self.line8.append(self.truck)
            xstart -= 150

    def ninth_line(self):
        xstart = 450
        for _ in range(10):
            self.truck = Turtle(shape="square")
            self.truck.seth(180)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=2, stretch_wid=1)
            self.truck.goto(xstart, 70)
            self.line9.append(self.truck)
            xstart -= 90

    def tenth_line(self):
        xstart = -450
        for _ in range(9):
            self.truck = Turtle(shape="square")
            self.truck.seth(0)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=2, stretch_wid=1)
            self.truck.goto(xstart, 90)
            self.line10.append(self.truck)
            xstart += 100

    def eleventh_line(self):
        xstart = 450
        for _ in range(5):
            self.truck = Turtle(shape="square")
            self.truck.seth(180)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=4, stretch_wid=1)
            self.truck.goto(xstart, 110)
            self.line11.append(self.truck)
            xstart -= 180

    def twelfth_line(self):
        xstart = -450
        for _ in range(8):
            self.truck = Turtle(shape="square")
            self.truck.seth(0)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=2, stretch_wid=1)
            self.truck.goto(xstart, 130)
            self.line12.append(self.truck)
            xstart += 112.5

    def thirteenth_line(self):
        xstart = -450
        for _ in range(8):
            self.truck = Turtle(shape="square")
            self.truck.seth(0)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=2, stretch_wid=1)
            self.truck.goto(xstart, 190)
            self.line13.append(self.truck)
            xstart += 112.5

    def fourteenth_line(self):
        xstart = -450
        for _ in range(8):
            self.truck = Turtle(shape="square")
            self.truck.seth(0)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=2, stretch_wid=1)
            self.truck.goto(xstart, 210)
            self.line14.append(self.truck)
            xstart += 112.5

    def fifteenth_line(self):
        xstart = -450
        for _ in range(8):
            self.truck = Turtle(shape="square")
            self.truck.seth(0)
            self.truck.penup()
            self.truck.color(random.choice(COLORS))
            self.truck.shapesize(stretch_len=2, stretch_wid=1)
            self.truck.goto(xstart, 230)
            self.line15.append(self.truck)
            xstart += 112.5
