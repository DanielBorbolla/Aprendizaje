# 🚨 Don't change the code below 👇
print("Welcome to the Love Calculator!")
name1 = input("What is your name? \n")
name2 = input("What is their name? \n")
# 🚨 Don't change the code above 👆

# Write your code below this line 👇
true = 0
love = 0

names = name1+name2

true = names.count("t") + names.count("r") + \
    names.count("u") + names.count("e")

love = names.count("l") + names.count("o") + \
    names.count("v") + names.count("e")
score = int(str(true)+str(love))

if score < 10 or score > 90:
    print(f"Your score is {score}, you go together like coke and mentos.")
elif score > 40 and score < 50:
    print(f"Your score is {score}, you are alright together.")
else:
    print(f"Your score is {score}.")
