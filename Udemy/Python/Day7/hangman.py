import random
import os
import ascii


def convert(word):
    string = " ".join([str(item) for item in word])
    return(string)


animals = ["baboon", "camel", "penguin", "chicken", "cat", "dog", "puma", "mouse",
           "rat", "elephant", "cow", "ant", "bird", "fish", "fox", "horse", "kangaroo", "lion", "monkey", "pig", "rabbit", "sheep", "tiger", "whale", "wolf"]
fruits = ["pomegranate", "grapefruit", "apple", "apricot", "avocado", "banana", "blackberry", "blueberry", "cherry", "coconut", "fig", "grape", "kiwi", "lemon", "lime",
          "lychee", "mandarin", "mango", "melon", "nectarine", "orange", "papaya", "passionfruit", "peach", "pear", "pineapple", "plum", "quince", "raspberry", "strawberry", "watermelon"]
technology = ["cellphone", "laptop", "computer", "videogame", "touchscreen", "app", "website", "telephone",
              "printer", "powercharger", "telegraph", "motherboard", "headphones", "headset", "bluetooth", "wifi"]

word_list = animals+fruits+technology


new_game = "y"
score = 0
os.system('clear')

ascii.logo()

player = input("enter your name:\n")
while new_game == 'y':
    os.system('clear')
    selected_word = random.choice(word_list)
    blank = ["_"] * len(selected_word)
    str_blank = (convert(blank))
    category = ""
    if selected_word in animals:
        category = "animal"
    elif selected_word in fruits:
        category = "fruit"
    elif selected_word in technology:
        category = "technology"
    lifes = 6
    print(" ")
    print(category)
    ascii.hangman(lifes)
    print(str_blank)
    memory = " "

    while lifes != 0 and str_blank != convert(selected_word):

        guess = input("select a letter. \n").lower()
        os.system('clear')
        if guess in memory:
            print("repeated letter guess again!")
        else:
            memory += guess
            print(guess)

            place = 0
            if guess in selected_word:
                for letter in selected_word:
                    if guess == letter:
                        blank[place] = guess
                        place += 1
                        str_blank = (convert(blank))
                    else:
                        place += 1
            else:
                lifes -= 1
        print(memory)
        print(category)
        ascii.hangman(lifes)
        print(str_blank)
        print(f"lives left {lifes}")

    if lifes != 0:
        print("you won!!")
        score += 1
    else:
        print(f"you loose!! the word was {selected_word}")
    print(f"{player} your score is: {score}")
    new_game = input("want to play again? \"y\" yes \"n\" no: \n")
