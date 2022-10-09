# with open("weather_data.csv") as File:
#     data = File.readlines()
# import csv

# with open("weather_data.csv") as File:
#     data = csv.reader(File)
#     temperatures = []
#     for row in data:
#         if row[1] != "temp":
#             t = int(row[1])
#             temperatures.append(t)
# print(temperatures)

from re import T
import pandas
import statistics

data = pandas.read_csv("weather_data.csv")

max_temp = data["temp"].max()
print(max_temp)
# print(data)
temperatures = data["temp"]
temp_list = temperatures.to_list()
direct_average = data["temp"].mean()
package_average = statistics.mean(temp_list)
tsum = 0
for temp in temp_list:
    tsum += temp

brute_average = tsum/len(temp_list)

print(direct_average)
print(package_average)
print(brute_average)


# print(temperatures)

# dictio = data.to_dict()
# print(dictio)

# print(data[data.day == "Wednesday"])
# print(data[data.temp == 14])

# wednesday = data[data.day == "Wednesday"]

# wed_temp = int(wednesday.temp)
# wed_temp_f = wed_temp*9/5+32
# print(wed_temp_f)
