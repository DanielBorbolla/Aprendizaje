import re
from menu import MENU, resources
import os


def payment(quarters, dimes, nickles, pennies, money):
    money = money + quarters*.25 + dimes*.10 + nickles*.05 + pennies*.01
    return money


def coffee():
    machine_money = 0
    while resources["water"] > 0 and resources["milk"] > 0 and resources["coffee"] > 0:
        money = 0
        valid_choice = False
        while not valid_choice:

            choice = input(
                f"What would you like? \n '1' espresso ${ MENU['espresso']['cost'] } \n '2' latte ${ MENU['latte']['cost']} \n '3' cappuccino ${ MENU['cappuccino']['cost']} \n")
            if choice == '1' or choice == '2' or choice == '3':
                valid_choice = True
            elif choice == "report":
                for resource in resources:
                    print(f"{resource}: {resources[resource]} ")
                print(f"Money: ${machine_money}")
            elif choice == "off":
                return
            else:
                print("option not available try again: ")
        os.system("clear")
        if choice == '1':
            selection = "espresso"
        elif choice == '2':
            selection = "latte"
        else:
            selection = "cappuccino"
        resources["water"] -= MENU[selection]["ingredients"]["water"]
        resources["milk"] -= MENU[selection]["ingredients"]["milk"]
        resources["coffee"] -= MENU[selection]["ingredients"]["coffee"]
        if resources["water"] > 0 and resources["milk"] > 0 and resources["coffee"] > 0:
            print(
                f"Please insert ${MENU[selection]['cost']} for your {selection}")
            quarters = 0
            dimes = 0
            nickles = 0
            pennies = 0
            quarters = int(input("how may quarters?: "))
            money = round(payment(quarters=quarters, dimes=0,
                                  nickles=0, pennies=0, money=money), 2)
            print(f"you have inserted ${money}")
            dimes = int(input("how may dimes?: "))
            money = round(payment(quarters=0, dimes=dimes,
                                  nickles=0, pennies=0, money=money), 2)
            print(f"you have inserted ${money}")
            nickles = int(input("how may nickles?: "))
            money = round(payment(quarters=0, dimes=0,
                                  nickles=nickles, pennies=0, money=money), 2)
            print(f"you have inserted ${money}")
            pennies = int(input("how may penis?: "))
            money = round(payment(quarters=0, dimes=0,
                                  nickles=0, pennies=pennies, money=money), 2)

            print(f"you have inserted ${money}")
            if money < MENU[selection]["cost"]:
                print("Sorry that's not enough money. Money refunded.")
                resources["water"] += MENU[selection]["ingredients"]["water"]
                resources["milk"] += MENU[selection]["ingredients"]["milk"]
                resources["coffee"] += MENU[selection]["ingredients"]["coffee"]

            else:
                money = round((money - MENU[selection]["cost"]), 2)
                if money > 0:
                    print(f"here is ${money} in change")
                print(f"Here is your {selection} ☕. fuck yourself")
                machine_money += MENU[selection]["cost"]
        else:
            if resources["water"] < 0:
                print("sorry there is not enough water")
            elif resources["milk"] < 0:
                print("sorry there is not enough milk")
            else:
                print("sorry there is not enough coffee")


coffee()
