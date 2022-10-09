fruits = ["Apple", "Pear", "Orange"]

# TODO: Catch the exception and make sure the code runs without crashing.


def make_pie(index):

    try:
        fruit = fruits[index]
    except IndexError:
        fruit = "Fruit"
    finally:
        print(fruit + " pie")


make_pie(4)
