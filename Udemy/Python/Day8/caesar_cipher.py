import art


def caesar_cipher(option, message, shift):
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    new_message = ""
    if option == "decode":
        print(" ")
    elif option == "encode":
        print(" ")
        alphabet.reverse()
    else:
        return(print("option not available"))
    shift = shift % 26

    for letter in message:
        if letter in alphabet:
            index = alphabet.index(letter)
            new_message += alphabet[index-shift]
        else:
            new_message += letter
    print(f"Here's the {option}d result: {new_message}")


answer = True
print(art.logo)
while answer:
    selection = (
        input("Type 'encode' to encrypt, type 'decode' to decrypt: \n ")).lower()
    message = (input("Type your message: \n")).lower()
    shift = int(input("Type the shift number:\n"))
    caesar_cipher(option=selection, message=message, shift=shift)
    question = input(
        "type 'yes' if you want to go again. Otherwise type 'no'.\n").lower()
    if question == "yes":
        answer = True
    else:
        answer = False
