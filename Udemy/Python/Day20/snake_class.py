from turtle import Screen, Turtle


class Snake:

    def __init__(self, lenght):
        self.lenght = lenght
        self.position = [0, 0]
        self.snake = []
        self.new_snake()

    def new_snake(self):
        for _ in range(0, self.lenght):
            self.segment = Turtle(shape="square")
            self.segment.penup()
            self.segment.setpos(self.position)
            self.segment.speed(0)

            self.position[0] -= 20
            self.segment.color("white")
            self.snake.append(self.segment)

    def grow(self):
        self.new_segment = Turtle(shape="square")
        self.new_segment.speed(0)
        self.new_segment.penup()
        self.new_segment.color("white")
        self.new_segment.goto(self.snake[-1].position())
        self.snake.append(self.new_segment)

    def reset(self):
        for segment in self.snake:
            segment.ht()
        self.snake.clear()
        self.new_snake()

    def move(self):
        pos = self.snake[0].position()

        direction = self.snake[0].heading()
        if direction == 0:
            self.snake[-1].setpos(pos[0]+20, pos[1])
        elif direction == 90:
            self.snake[-1].setpos(pos[0], pos[1]+20)
        elif direction == 180:
            self.snake[-1].setpos(pos[0]-20, pos[1])
        else:
            self.snake[-1].setpos(pos[0], pos[1]-20)

        self.snake[-1].setheading(direction)
        self.snake.insert(0, self.snake.pop())

    def go_up(self):
        if not self.snake[0].heading() == 270:
            self.snake[0].setheading(90)

    def go_left(self):
        if not self.snake[0].heading() == 0:
            self.snake[0].setheading(180)

    def go_right(self):
        if not self.snake[0].heading() == 180:
            self.snake[0].setheading(0)

    def go_down(self):
        if not self.snake[0].heading() == 90:
            self.snake[0].setheading(270)
