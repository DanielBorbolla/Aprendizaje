import requests


def get_questions():
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
    question_type = "boolean"
    amount = 10
    category = category_codes["General Knowledge"]
    difficulty = hardness[1]
    response = requests.get(
        url=f"https://opentdb.com/api.php?amount={amount}&category={category}&difficulty={difficulty}&type={question_type}")
    response.raise_for_status()
    questions = response.json()
    return questions["results"]


question_data = get_questions()
