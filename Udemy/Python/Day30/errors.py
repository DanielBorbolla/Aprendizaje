# try:
#     file = open("a_file.txt")
#     a_diccionary = {"key": "value"}
#     print(a_diccionary["key"])
# except FileNotFoundError:
#     # print("there was an error")
#     file = open("a_file.txt", "w")
#     file.write("something")
# except KeyError as error_message:
#     print(f"The key {error_message} does not exist")
# else:
#     content = file.read()
#     print(content)
# finally:
#     file.close()
#     print("file clossed")
#     raise TypeError("This is a made up error")


height = float(input("Height: "))
weight = int(input("Weight: "))

if height > 3:
    raise ValueError("Human Height should not be over 3 meters.")

bmi = weight / height ** 2
print(bmi)
