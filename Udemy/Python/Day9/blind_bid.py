import os
import art


def add_new(new_name, new_bid):
    auction_dictionary[new_name] = new_bid


os.system('clear')
print(art.logo)
print("Welcome to the secret auction program")

new_participant = True
auction_dictionary = {}
while new_participant:
    name = input("What is your name?: ")
    bid = float(input("What's your bid?: $"))
    add_new(new_name=name, new_bid=bid)
    question = input("Are there any other bidders? Type 'yes' or 'no'")
    os.system('clear')
    if question == "no":
        new_participant = False


highest_bid = 0
current_leader = ""
for key in auction_dictionary:
    if auction_dictionary[key] > highest_bid:
        highest_bid = auction_dictionary[key]
        current_leader = key

print(f"the winner is {current_leader} with a bid of ${highest_bid}.")
