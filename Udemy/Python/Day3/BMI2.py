# 🚨 Don't change the code below 👇
height = float(input("enter your height in m: "))
weight = float(input("enter your weight in kg: "))
# 🚨 Don't change the code above 👆

# Write your code below this line 👇
BMI = weight/(height**2)
category = ""
BMI = round(BMI)

if BMI < 18.5:
    category = "are underweight."
elif BMI < 25:
    category = "have a normal weight."
elif BMI < 30:
    category = "are slightly overweight."
elif BMI < 35:
    category = "are obese."
else:
    category = "are clinically obese."

print(f"Your BMI is {BMI}, you {category}")
