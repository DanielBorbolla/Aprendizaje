from turtle import Screen
from vehicles import Truck
from Running_turtle import RunningTurtle
from level import Level
from score import Score
from lives import Lives
from safe_zones import SafeZone


screen = Screen()
screen.setup(width=800, height=600)
screen.title("Turtle Crossing")
screen.tracer(0)

safe_zone = SafeZone()
turtle = RunningTurtle()
screen.listen()
screen.update()
screen.onkey(key="Up", fun=turtle.up)
screen.onkey(key="Left", fun=turtle.left)
screen.onkey(key="Right", fun=turtle.right)
screen.onkey(key="Down", fun=turtle.down)
level = Level()
score = Score()
lives = Lives()


counter = 0
line1 = Truck()
speed = 500


def game():
    global counter
    global line1
    global speed

    screen.update()
    if turtle.ycor() > 260:
        level.level_up()
        speed -= 50
        level.writelevel()
        turtle.restart()

    # movimiento de la primer línea de camiones
    for truck in line1.line1:
        if truck.xcor() < -450:
            truck.setx(450)
        truck.fd(10)
    # detección de coliciones con la primer línea
    for truck in line1.line1:
        if turtle.ycor() < -210 and turtle.ycor() > -250:
            if turtle.distance(truck) < 40:
                turtle.restart()
                lives.loosinglive()
    # movimiento de la segunda línea de carros
    for truck in line1.line2:
        if truck.xcor() < -450:
            truck.setx(450)
        truck.fd(8)
    # detección de coliciones con la segunda línea
    for truck in line1.line2:
        if turtle.ycor() < -190 and turtle.ycor() > -230:
            if turtle.distance(truck) < 20:
                turtle.restart()
                lives.loosinglive()

    # movimiento de la tercer línea de carros
    for truck in line1.line3:
        if truck.xcor() > 450:
            truck.setx(-450)
        truck.fd(5)
    # detección de coliciones con la tercer línea
    for truck in line1.line3:
        if turtle.ycor() < -130 and turtle.ycor() > -170:
            if turtle.distance(truck) < 20:
                turtle.restart()
                lives.loosinglive()

    # movimiento de la cuarta línea de camiones
    for truck in line1.line4:
        if truck.xcor() < -450:
            truck.setx(450)
        truck.fd(8)
    # detección de coliciones con la cuarta línea
    for truck in line1.line4:
        if turtle.ycor() < -110 and turtle.ycor() > -150:
            if turtle.distance(truck) < 40:
                turtle.restart()
                lives.loosinglive()

    # movimiento de la quinta línea de carros
    for truck in line1.line5:
        if truck.xcor() > 450:
            truck.setx(-450)
        truck.fd(9)
    # detección de coliciones con la quinta línea
    for truck in line1.line5:
        if turtle.ycor() < -90 and turtle.ycor() > -130:
            if turtle.distance(truck) < 20:
                turtle.restart()
                lives.loosinglive()

    # movimiento de la sexta línea de carros
    for truck in line1.line6:
        if truck.xcor() < -450:
            truck.setx(450)
        truck.fd(40)
    # detección de coliciones con la sexta línea
    for truck in line1.line6:
        if turtle.ycor() < -30 and turtle.ycor() > -70:
            if turtle.distance(truck) < 20:
                turtle.restart()
                lives.loosinglive()

    # movimiento de la septima línea de carros
    for truck in line1.line7:
        if truck.xcor() > 450:
            truck.setx(-450)
        truck.fd(40)
    # detección de coliciones con la septima línea
    for truck in line1.line7:
        if turtle.ycor() < 10 and turtle.ycor() > -30:
            if turtle.distance(truck) < 20:
                turtle.restart()
                lives.loosinglive()

    # movimiento de la octava línea de camiones
    for truck in line1.line8:
        if truck.xcor() < -450:
            truck.setx(450)
        truck.fd(11)
    # detección de coliciones con la octava línea
    for truck in line1.line8:
        if turtle.ycor() < 70 and turtle.ycor() > 30:
            if turtle.distance(truck) < 40:
                turtle.restart()
                lives.loosinglive()

    # movimiento de la novena línea de carros
    for truck in line1.line9:
        if truck.xcor() < -450:
            truck.setx(450)
        truck.fd(9)
    # detección de coliciones con la novena línea
    for truck in line1.line9:
        if turtle.ycor() < 90 and turtle.ycor() > 50:
            if turtle.distance(truck) < 20:
                turtle.restart()
                lives.loosinglive()

    # movimiento de la decima línea de carros
    for truck in line1.line10:
        if truck.xcor() > 450:
            truck.setx(-450)
        truck.fd(5)
    # detección de coliciones con la decima línea
    for truck in line1.line10:
        if turtle.ycor() < 110 and turtle.ycor() > 70:
            if turtle.distance(truck) < 20:
                turtle.restart()
                lives.loosinglive()

    # movimiento de la onceava línea de camiones
    for truck in line1.line11:
        if truck.xcor() < -450:
            truck.setx(450)
        truck.fd(8)
    # detección de coliciones con la onceava línea
    for truck in line1.line11:
        if turtle.ycor() < 130 and turtle.ycor() > 90:
            if turtle.distance(truck) < 40:
                turtle.restart()
                lives.loosinglive()

    # movimiento de la doceava línea de carros
    for truck in line1.line12:
        if truck.xcor() > 450:
            truck.setx(-450)
        truck.fd(9)
    # detección de coliciones con la doceava línea
    for truck in line1.line12:
        if turtle.ycor() < 150 and turtle.ycor() > 110:
            if turtle.distance(truck) < 20:
                turtle.restart()
                lives.loosinglive()

    # movimiento de la treceava línea de carros
    for truck in line1.line13:
        if truck.xcor() > 450:
            truck.setx(-450)
        truck.fd(9)
    # detección de coliciones con la treceava línea
    for truck in line1.line13:
        if turtle.ycor() < 210 and turtle.ycor() > 170:
            if turtle.distance(truck) < 20:
                turtle.restart()
                lives.loosinglive()

    # movimiento de la catorceava línea de carros
    for truck in line1.line14:
        if truck.xcor() > 450:
            truck.setx(-450)
        truck.fd(10)
    # detección de coliciones con la catorceava línea
    for truck in line1.line14:
        if turtle.ycor() < 230 and turtle.ycor() > 190:
            if turtle.distance(truck) < 20:
                turtle.restart()
                lives.loosinglive()

    # movimiento de la quiceava línea de carros
    for truck in line1.line15:
        if truck.xcor() > 450:
            truck.setx(-450)
        truck.fd(11)
    # detección de coliciones con la quinceava línea
    for truck in line1.line15:
        if turtle.ycor() < 250 and turtle.ycor() > 210:
            if turtle.distance(truck) < 20:
                turtle.restart()
                lives.loosinglive()

    screen.update()
    if lives.lives > 0:
        screen.ontimer(game, speed)
    else:
        screen.clear()
        lives.game_over()
        screen.update()
        screen.exitonclick()


game()


screen.exitonclick()
