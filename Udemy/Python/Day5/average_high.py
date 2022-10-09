
# 🚨 Don't change the code below 👇

student_heights = input("Input a list of student heights ").split()

for n in range(0, len(student_heights)):
    student_heights[n] = int(student_heights[n])
# 🚨 Don't change the code above 👆


# Write your code below this row 👇
sum_heights = 0
no_items = 0

for height in student_heights:
    sum_heights += height
    no_items += 1

print(no_items)

avg_height = round(sum_heights/no_items)
print(avg_height)

# se hizo esta técnica para no usar ni len ni sum
