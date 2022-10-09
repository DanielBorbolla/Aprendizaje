import pandas

student_dict = {
    "student": ["Angela", "James", "Lily"],
    "score": [56, 76, 98]
}

DF = pandas.DataFrame(student_dict)

for (index, row) in DF.iterrows():
    print(row.student)
