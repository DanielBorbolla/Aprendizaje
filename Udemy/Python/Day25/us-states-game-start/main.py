import turtle
import pandas

data = pandas.read_csv("us-states-game-start/50_states.csv")

screen = turtle.Screen()
screen.title("Otro Juego Pendejo")
image = "/Users/danielborbolla/Desktop/Python Udemy/Day25/us-states-game-start/blank_states_img.gif"
screen.addshape(image)
turtle.shape(image)
FONT = ("Courier", 16, "normal")
FONT2 = ("Courier", 14, "normal")

# ! codigo pendejo que la chinita nos puso a hacer para perder tiempo
# def get_mouse_click_coor(x, y):
#     print(x, y)


# turtle.onscreenclick(get_mouse_click_coor)
#!fin de codigo pendejo
hits = 0
correct_guesses = []

states = data["state"].to_list()


def game_on():
    global hits
    global correct_guesses
    global states
    hits = 0
    correct_guesses = []
    while len(correct_guesses) < 50:
        answer_state = screen.textinput(
            title=f"{hits}/50 States Correct", prompt="What`s another state's name?").title().strip()

        if answer_state in states:
            if answer_state in correct_guesses:
                repeat = screen.textinput(
                    title=f"{answer_state} was already selected", prompt="continue").title()
            else:
                x = int(data[data.state == answer_state]["x"])
                y = int(data[data.state == answer_state]["y"])
                correct_answer = turtle.Turtle()
                correct_answer.penup()
                correct_answer.hideturtle()
                correct_answer.goto(x, y)
                correct_answer.write(arg=(f"{answer_state}"), move=False,
                                     align="center", font=(FONT))
                hits += 1
                correct_guesses.append(answer_state)

        elif answer_state == "Exit":
            break


game_on()
missing_answers = list(set(states)-set(correct_guesses))
DF = pandas.DataFrame(missing_answers, columns=["Missing States"])
DF.to_csv("results.csv")

# ! el siguiente código era porque antes tenía un ciclo for con un número limitado de intentos.
# ToDo resolver como hacer un dataframe de varias listas o una lista de listas
# missing_states = turtle.Turtle()
# missing_states.penup()
# missing_states.hideturtle()
# missing_states.goto(0, 290)
# missing_states.write(arg=(f"you missed {missing_answers}"), move=False,
#                      align="center", font=(FONT2))
# play_again = screen.textinput(
#     title=f"you got {hits} states correct", prompt="Want to play again? yes no")
# play_again = play_again.lower()
# if play_again == "yes":
#     screen.clearscreen()
#     turtle.shape(image)
#     correct_guesses = correct_guesses.sort()
#     missing_answers = missing_answers.sort()
#     zipped = [states, correct_guesses, missing_answers]

#     DF = pandas.DataFrame(zipped, columns=["states", "correct answers"
#                                            "Missing States"])
#     DF.to_csv("results.csv")
#     game_on()

turtle.mainloop()
