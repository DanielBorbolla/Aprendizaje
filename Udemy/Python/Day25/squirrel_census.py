import pandas

data = pandas.read_csv("2018_Central_Park_Squirrel_Census_-_Squirrel_Data.csv")

dups_color = data.pivot_table(columns=["Age"], aggfunc="size")
print(dups_color)

dups_color.to_csv("squirrel_age.csv")
