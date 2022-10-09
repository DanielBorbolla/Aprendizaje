def my_print(name):
    print(f"fuck you {name}")
    print("me gustan los nachos")
    print("pinche chinita")


def positional_inputs(first_name, last_name):
    print(f"hello {first_name} {last_name}")


def keyword_inputs(animal, sound):
    print(f"the {animal} goes {sound} ")


def selection(option):
    if option == 1:
        my_print(input("whats your name?\n"))
    elif option == 2:
        positional_inputs(input("first name\n"), input("last name\n"))
    elif option == 3:
        keyword_inputs(sound=input("what sound does it make?\n"),
                       animal=input("choose your animal\n"))
    else:
        message = input("write your message")
        print(message.reverse())


selection(input(
    "select the program to run: 1 for videogame greet 2 for formal greet 3 for animal greet 4 to reverse a message"))
