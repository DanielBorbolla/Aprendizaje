from numpy import nan_to_num
import pandas

data = pandas.read_csv("nato_phonetic_alphabet.csv")

#! Método de comprehension de dataframes
nato_dict = {row.letter: row.code for (index, row) in data.iterrows()}
# nato_dict = {}

# for (index, row) in data.iterrows():
#     nato_dict[row.letter] = row.code

alphabet = nato_dict.keys()
message = input("Write the message ").upper()

nato_message = [nato_dict[letter] for letter in message if letter in alphabet]


print(nato_message)
