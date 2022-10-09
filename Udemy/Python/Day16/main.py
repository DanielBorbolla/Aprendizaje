from menu import Menu, MenuItem
from coffee_maker import CoffeeMaker
from money_machine import MoneyMachine

# menu = Menu()

# options = menu.get_items().split("/")
# options.pop()
# for option in options:
#     print(menu.cost)

# print(options)
my_money_machine = MoneyMachine()
my_menu = Menu()
# menu_items = MenuItem()
my_coffeee_maker = CoffeeMaker()

is_on = True
options = my_menu.get_items()
options_list = options.split("/")
options_list.append("report")
options_list.append("off")
while is_on:
    choice = "new"
    while not choice in options_list:
        choice = input(f"choose your poison {options} ")
        if choice == "off":
            is_on = False
        elif choice == "report":
            my_money_machine.report()
            my_coffeee_maker.report()
        elif choice in options_list:
            drink = my_menu.find_drink(choice)
            if (my_coffeee_maker.is_resource_sufficient(drink)):
                if my_money_machine.make_payment(drink.cost):
                    my_coffeee_maker.make_coffee(drink)
        else:
            print("option not available select from the menu")
