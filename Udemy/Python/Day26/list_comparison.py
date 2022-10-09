
with open("file1.txt", "r") as file:
    file1 = file.read().splitlines()

with open("file2.txt", "r") as file:
    file2 = file.read().splitlines()

result = [int(num) for num in file1 if num in file2]

print(result)
