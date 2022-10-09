print("Welcome to the tip calculator.")
bill = float(input("What was the total bill mother fucker? $"))
porcentage = int(
    input("What percentage tip would you like to give? 10, 12, or 15? "))
people = int(input("How many people to spllit the bill? "))

total = round((bill*(1+porcentage/100))/people, 2)
#total = "{:.2f}".format(total)

print(f"Each person should pay: ${(total):.2f}")
