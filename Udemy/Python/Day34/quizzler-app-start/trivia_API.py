import requests
import html
category_codes = {
    "General Knowledge": 9,
    "Entertainment: Books": 10,
    "Entertainment: Film": 11,
    "Entertainment: Music": 12,
    "Entertainment: Musicals": 13,
    "Entertainment: Television": 14,
    "Entertainment: Video Games": 15,
    "Entertainment: Board Games": 16,
    "Science: Nature": 17,
    "Science: Computers": 18,
    "Science: Mathematics": 19,
    "Mythology": 20,
    "Sports": 21,
    "Geography": 22,
    "History": 23,
    "Politics": 24,
    "Art": 25,
    "Celebrities": 26,
    "Animals": 27,
    "Vehicles": 28,
    "Entertainment: Comics": 29,
    "Science: Gadgets": 30,
    "Entertainment: Anime": 31,
    "Entertainment: Cartoons": 32,

}

hardness = ["easy", "medium", "hard"]
question_type = ["boolean", "multiple"]

amount = 10
category = category_codes["General Knowledge"]
difficulty = hardness[1]
parameters = {
    "amount": amount,
    "type": question_type[0],
    "category": category,
    "difficulty": difficulty,
}
response = requests.get(
    url=f"https://opentdb.com/api.php", params=parameters)
response.raise_for_status()
questions = response.json()
question_data = questions["results"]
formated_questions = [html.unescape(question["question"])
                      for question in question_data]
print(formated_questions)
