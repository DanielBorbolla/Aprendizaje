# en esta versión se incorpora: un conteo de fichas, un hi score, la opción de duplicar el juego en caso de que en la primer mano salgan dos cartas del mismo valor y un deck de tres bajaras en el cual se van restando las cartas robadas. se hace uso de listas, diccionarios, listas en diccionarios, funciones, varibales globales, recursión y lectura y modificación de ficheros
import random
from art import logo
import os
from baraja import baraja


def calculate_score(hand):
    value = []
    global baraja
    for i in range(0, (len(hand))):
        value.append(baraja[hand[i]][1])
    if sum(value) == 21 and len(hand) == 2:
        return 0
    while 11 in value and sum(value) > 21:
        value.remove(11)
        value.append(1)
    return sum(value)


def deck():
    global baraja
    pick = random.randint(0, 51)
    card_list = ["C_as", "C_2", "C_3", "C_4", "C_5", "C_6", "C_7", "C_8", "C_9", "C_10", "C_J", "C_Q", "C_R", "D_as", "D_2", "D_3", "D_4", "D_5", "D_6", "D_7", "D_8", "D_9", "D_10", "D_J", "D_Q",
                 "D_R", "T_as", "T_2", "T_3", "T_4", "T_5", "T_6", "T_7", "T_8", "T_9", "T_10", "T_J", "T_Q", "T_R", "E_as", "E_2", "E_3", "E_4", "E_5", "E_6", "E_7", "E_8", "E_9", "E_10", "E_J", "E_Q", "E_R"]
    card = card_list[pick]
    remaining_cards = baraja[card][0]
    if remaining_cards > 0:
        remaining_cards -= 1
        baraja[card][0] = remaining_cards
        return card
    else:
        return deck()


def hi_score():
    global chips
    f = open("hi_score.txt", "r")
    x = int(f.read())
    f.close()
    if chips > x:
        f = open("hi_score.txt", "w")
        f.write(str(chips))
        f.close()
        print(f"new hi score {chips}")


def win_loose(player, house):
    global bet
    global chips
    if player > 21:
        return "Loose"

    elif player == 0 and house == 0:
        chips += bet
        return "Tie"
    elif player == 0:
        chips += 3*bet
        hi_score()
        return "Black Jack"
    elif house == 0:
        return "Loose"
    elif house > 21:
        chips += 2*bet
        hi_score()
        return "Win"
    elif player > house:
        chips += 2*bet
        hi_score()
        return "win"
    elif player == house:
        chips += bet
        return "Tie"
    else:
        return "Loose"


def draw():
    global count
    global baraja
    if count < 156:
        card = deck()
        count += 1
        return card
    else:
        for key in baraja:
            baraja[key][0] = 3
        count = 1
        card = deck
    return card


count = 0
chips = 0
bet = 0


def play_game():
    question = "y"
    global count
    global chips
    global bet
    chips = 10
    while question == "y" and chips != 0:
        print(logo)
        f = open("hi_score.txt", "r")
        x = int(f.read())
        f.close()
        print(f"you have {chips} chips the hi score is {x}")
        bet = int(input("place your bet"))
        while bet > chips:
            print("you don't have enough money for that bet")
            bet = int(input("place your bet"))
        chips -= bet
        player = []
        game_2 = []
        house = []
        game_over = False
        for card in range(2):
            player.append(draw())
            house.append(draw())
        player_score = calculate_score(player)
        if baraja[player[0]][2] == baraja[player[1]][2] and chips >= bet:
            print(baraja[player[0]][3])
            print(baraja[player[1]][3])

            split = input("do you want to split your game?:")
            if split == "y":
                game_2.append(player.pop(1))
                player.append(draw())
                game_2.append(draw())
                chips -= bet
                while not game_over:
                    os.system("clear")
                    for i in range(len(game_2)):
                        print(baraja[game_2[i]][3])

                    game_score = calculate_score(game_2)
                    print(f" Game 2 total score: {game_score}")
                    if game_score == 0 or game_score > 21:
                        game_over = True
                    else:
                        new_card = input("new card? ")
                    if new_card == "y":
                        game_2.append(draw())
                        os.system("clear")
                    else:
                        game_over = True
                        print(baraja[game_2[i]][3])
                        print(f" total score: {game_score}")

                game_over = False

        while not game_over:
            os.system("clear")
            player_score = calculate_score(player)
            for i in range(len(player)):
                print(baraja[player[i]][3])

            print(f"total score: {player_score}")
            if player_score == 0 or player_score > 21:
                game_over = True
            else:
                new_card = input("new card? ")
                if new_card == "y":
                    player.append(draw())
                else:
                    for i in range(len(player)):
                        print(baraja[player[i]][3])
                    print(f"total score: {player_score}")
                    game_over = True

        house_score = calculate_score(house)
        while house_score != 0 and house_score < 17:
            house.append(draw())
            house_score = calculate_score(house)
        os.system("clear")
        for i in range(len(house)):
            print(baraja[house[i]][3])
        print(f"total score {house_score}")
        if len(game_2) != 0:
            print(f"total score: {game_score}")
            print(win_loose(game_score, house_score))
        print(f"Game 1 {player} total score: {player_score}")
        print(win_loose(player_score, house_score))
        if chips > 0:
            question = input("new game? ")
            os.system("clear")
            if question == "baraja":
                print(baraja)


while input("Do you want to enter the table of Black Jack? Type 'y' or 'n': ") == "y":
    os.system("clear")
    play_game()
