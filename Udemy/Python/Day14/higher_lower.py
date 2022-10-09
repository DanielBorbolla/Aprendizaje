from game_data import data
import random
import art
import os


def game():
    os.system("clear")
    options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
               25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 48, 49]
    random.shuffle(options)
    game_over = False
    option_1 = options.pop()
    score = 0
    while not game_over and score < 46:
        os.system("clear")

        print(art.logo)

        if score > 0:
            print(f"You're right! Current score: {score}")
        random.shuffle(options)
        option_2 = options.pop()
        a_followers = data[option_1]['follower_count']
        b_followers = data[option_2]['follower_count']
        print(
            f"Compare A: {data[option_1]['name']} a {data[option_1]['description']} from {data[option_1]['country']}")
        print(a_followers)
        print(art.vs)
        print(
            f"With B: {data[option_2]['name']} a {data[option_2]['description']} from {data[option_2]['country']}")
        print(b_followers)
        guess = input("Who has more followers? Type 'A' or 'B' ").lower()
        valid_guess = False

        while not valid_guess:
            if guess == "a" or guess == "b":
                if guess == "a" and a_followers > b_followers or guess == "b" and b_followers > a_followers:
                    score += 1

                    if random.randint(1, 2) == 2:
                        option_1 = option_2
                else:
                    game_over = True
                    os.system("clear")
                    print(art.logo)
                    print(f"Sorry, that's wrong. Final score: {score}")

                valid_guess = True
            else:
                guess = input("invalid option. Select 'A' or 'B': ").lower()

    if score == 46:
        os.system("clear")
        print(art.logo)
        print("congratulations you beat the game")


game()
