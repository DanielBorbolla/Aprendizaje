# otra vez un juego pedorrisimo como ejercicio
import random


def higher_lower():
    guess = 0
    global TRIES
    global number
    while guess != number and TRIES > 0:
        print(f"You have {TRIES} attempts remaining to guess the number")
        guess = int(input("Make a guess: "))
        if guess < number:
            print("Too low.")
        elif guess > number:
            print("Too High")

        if TRIES > 1 and guess != number:
            print("Guess again.")
        TRIES -= 1
    if number == guess:
        print(f"You got it! The answer was {number}")
    else:
        print(f"You've run out of guesses, you lose. the answer was {number}")


print("Welcome to your inpending doom! \n I'm thinking a number between 1 and 100.")

difficulty = input("choose a difficulty. Type 'easy' or 'hard': ").lower()
acces = True
while acces:
    if difficulty == "easy":
        TRIES = 10
        acces = False
    elif difficulty == "hard":
        TRIES = 7
        acces = False
    else:
        difficulty = input(
            "invalid difficulty, Type 'easy' or 'hard': ").lower()
number = random.randint(1, 100)

higher_lower()
