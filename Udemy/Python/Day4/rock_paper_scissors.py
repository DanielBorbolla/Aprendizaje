import random
print("Welcome to your Rock, Paper,Lesbian game")
player = int(
    input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors: \n"))
robot = random.randint(0, 2)
rock = ('''           ___..__
  __..--""" ._ __.'
              "-..__
            '"--..__";
 ___        '--...__"";
    `-..__ '"---..._;"
          """"----'       ''')

paper = ('''                 _
               _  / |
              / \ | | /)
               \ \| |/ /
                \ Y | /___
              .-.) '. `__/
             (.-.   / /
                 | ' |
                 |___|
                [_____]
         jgs    |     |''')

scissors = ('''    .-.  _
    | | / )
    | |/ /
   _|__ /_
  / __)-' )
  \  `(.-')
   > ._>-'
  / \/

VK ''')

game = [rock, paper, scissors]
if player < 0 or player >= 3:
    print("Invalid number you loose")
else:
    print(f"you choose \n{game[player]}")
    print(f"i choose \n{game[robot]}")


# if player == 0:
#     if robot == 0:
#         print("tie")
#     elif robot == 1:
#         print("You loose")
#     else:
#         print("You win")
# elif player == 1:
#     if robot == 0:
#         print("You win")
#     elif robot == 1:
#         print("tie")
#     else:
#         print("You Loose")
# else:
#     if robot == 0:
#         print("You loose")
#     elif robot == 1:
#         print("You win")
#     else:
#         print("tie")
if player == robot:
    print("Tie")
elif player == 0 and robot == 2:
    print("You win")
elif robot == 0 and player == 2:
    print("You loose")
elif player == 1 and robot == 0:
    print("You win")
elif robot == 1 and player == 0:
    print("You loose")
elif player == 1 and robot == 2:
    print("You loose")
elif player == 2 and robot == 1:
    print("You win")
