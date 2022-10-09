# TODO: Create a letter using starting_letter.txt
# for each name in invited_names.txt
# Replace the [name] placeholder with the actual name.
# Save the letters in the folder "ReadyToSend".

# Hint1: This method will help you: https://www.w3schools.com/python/ref_file_readlines.asp
# Hint2: This method will also help you: https://www.w3schools.com/python/ref_string_replace.asp
# Hint3: THis method will help you: https://www.w3schools.com/python/ref_string_strip.asp

with open("/Users/danielborbolla/Desktop/Python Udemy/Day24/Mail Merge Project Start/Input/Names/invited_names.txt", "r") as file:
    List = file.readlines()
new_list = []
for guest in List:
    name = guest.strip("\n")
    new_list.append(name)
# print(new_list)

for name in new_list:
    with open(f"/Users/danielborbolla/Desktop/Python Udemy/Day24/Mail Merge Project Start/Output/ReadyToSend/{name}.txt", "w") as letter:
        with open("/Users/danielborbolla/Desktop/Python Udemy/Day24/Mail Merge Project Start/Input/Letters/starting_letter.txt", "r") as blank:
            guide = blank.read()
        guide = guide.replace("Angela", "Daniel")
        letter.write(guide.replace("[name]", name))
