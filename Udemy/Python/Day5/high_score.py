# 🚨 Don't change the code below 👇
student_scores = input("Input a list of student scores ").split()
for n in range(0, len(student_scores)):
    student_scores[n] = int(student_scores[n])
print(student_scores)
# 🚨 Don't change the code above 👆

# Write your code below this row 👇

temp_number = 0
for n in range(1, len(student_scores)):
    for m in range(0, (len(student_scores)-n)):
        if student_scores[m] > student_scores[m+1]:
            temp_number = student_scores[m]
            student_scores[m] = student_scores[m+1]
            student_scores[m+1] = temp_number

print(f"The highest score in the class is: {student_scores[-1]}")

# el código propuesto en udemy es el siguiente
highest_score = 0
for score in student_scores:
    if score > highest_score:
        highest_score = score
print(f"The highest score in the class is: {highest_score}")

# el objetivo es explorar la lógica de los ciclos for por eso no se utiliza max ni sort
