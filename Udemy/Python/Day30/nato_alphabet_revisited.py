import pandas

data = pandas.read_csv("nato_phonetic_alphabet.csv")


def word_comversion():
    word = input("Write the message ").upper()
    try:
        nato_message = [nato_dict[letter] for letter in word]
    except KeyError:
        print("Only letters of the aphabet")
        word_comversion()
    else:
        print(nato_message)


nato_dict = {row.letter: row.code for (index, row) in data.iterrows()}

alphabet = nato_dict.keys()

word_comversion()
