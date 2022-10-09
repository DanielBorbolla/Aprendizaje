print('''*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."\` . "-._ /_______________|_______
|                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/[TomekK]
*******************************************************************************''')


print("Welcome to Treasure Island. \n Your mission is to find the treasure.")

direction = input(
    "You're at a cross road. Where do you want to go? Type \"L\" for left or \"R\" for right").lower()
if direction == "l":
    action = input(
        "You come to a lake. There is an island in the middle of the lake. Type \"W\" to wait for a boat or \"S\" to swim across.").lower()
    if action == "w":
        door = input("You arrive at the island unharmed. There is a house with 3 doors One red, one yellow and one blue. Type \"R\", \"Y\" or \"B\" to select the door").lower()
        if door == "y":
            print("you lucky bastard you WIN!!!")
        elif door == "r":
            print("You step into a flamethrower trap and die calcinated\n GAME OVER!!!")
        elif door == "b":
            print("You encounter a wild Riley and eats you alive \GAME OVER!!!")
        else:
            print(
                "You die because you dont know how to follow instructions \n GAME OVER!!!")

    else:
        print("You are Attacked by a trout and die in agony \n GAME OVER!!!")
else:
    print("you fell into a hole \n GAME OVER!!!")
