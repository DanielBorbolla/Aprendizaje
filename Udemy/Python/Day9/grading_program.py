student_scores = {
    "Harry": 81,
    "Ron": 78,
    "Hermione": 99,
    "Draco": 74,
    "Neville": 62,
}
# 🚨 Don't change the code above 👆
# TODO-1: Create an empty dictionary called student_grades.
# TODO-2: Write your code below to add the grades to student_grades.👇

student_grades = {}
for key in student_scores:
    grade = student_scores[key]
    if grade > 90 and grade <= 100:
        student_grades[key] = "Outstanding"
    elif grade > 80 and grade <= 90:
        student_grades[key] = "Exceeds Expectations"
    elif grade > 70 and grade <= 80:
        student_grades[key] = "Acceptable"
    elif grade > 0 and grade <= 70:
        student_grades[key] = "Fail"
    else:
        print(
            f"error in student {key} score: {student_scores[key]} us not a valid score")


# 🚨 Don't change the code below 👇
print(student_grades)
