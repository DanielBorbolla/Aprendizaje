
from snake_class import Snake
from turtle import Screen
from food import Food
from score_board import ScoreBoard


def speed_up():
    global speed
    speed -= 5


def exit():
    global game_is_on
    game_is_on = False


screen = Screen()
screen.setup(width=800, height=800)
screen.bgcolor("black")
screen.title("My Python game")
screen.tracer(0)

snake = Snake(3)
food = Food()
score = ScoreBoard()
screen.update()

screen.listen()
screen.update()
screen.onkey(key="Up", fun=snake.go_up)
screen.onkey(key="Left", fun=snake.go_left)
screen.onkey(key="Right", fun=snake.go_right)
screen.onkey(key="Down", fun=snake.go_down)
screen.onkey(key="k", fun=exit)


speed = 350
game_is_on = True


def game():
    global game_is_on
    global speed
    if game_is_on:
        snake.move()
        screen.update()
        # Detectar cuando la vibora se come un buebito
        if snake.snake[0].distance(food) < 20:
            food.new_food()
            score.add_score()
            snake.grow()
            if len(snake.snake) < 200:
                speed_up()

        # detectar cuando la vibora choca contra la pared
        if snake.snake[0].xcor() > 380 or snake.snake[0].ycor() > 380 or snake.snake[0].xcor() < -380 or snake.snake[0].ycor() < -380:
            snake.reset()
            score.reset()
            speed = 350

        # detectar coliciones con el cuerpo
        for piece in snake.snake[1:]:
            if snake.snake[0].distance(piece) < 10:
                snake.reset()
                score.reset()
                speed = 350
        screen.ontimer(game, speed)


game()

screen.exitonclick()
