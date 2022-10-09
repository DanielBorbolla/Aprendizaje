base = list(range(1, 11))
is_over = False


def attack(selection):
    global base
    if not is_over:
        if selection in base:
            base.remove(selection)
            print("Base number {} lost".format(selection))
        else:
            print("Base number {} was already destroyed".format(selection))
    else:
        print("STOP ITS ALREADY DEATH!!!")


def game_over():
    global is_over
    if len(base) > 0:
        print("Its not over yet")
    else:
        print("humanity is lost")
        is_over = True


attack(2)
attack(8)
attack(5)
attack(5)  # "La base 5 ya fue destruida"
game_over()  # False
attack(4)
attack(1)
attack(9)
attack(10)
game_over()  # False
attack(3)
attack(7)
attack(6)
game_over()  # True
attack(1)  # "El juego ya terminó"
