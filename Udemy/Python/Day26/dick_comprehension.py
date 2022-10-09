import random
# ? new_dict = {new_key:new_value for item in list}
# ? new_dict = {new_key:new_value for (key,value) in dict.items()}

names = ["Alex", "Beth", "Caroline", "Dave", "Eleanor", "Freddie"]

student_scores = {name: random.randint(0, 100) for name in names}

passed_students = {name: score for (
    name, score) in student_scores.items() if score >= 60}
print(student_scores)
print(passed_students)
