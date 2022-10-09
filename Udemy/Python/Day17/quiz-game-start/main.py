from question_model import Question
from data import question_data
from quiz_brain import QuizBrain
question_bank = []
for questions in question_data:
    x = Question(questions["question"], questions["correct_answer"])
    question_bank.append(x)

quiz = QuizBrain(question_bank)
while quiz.still_has_questions():
    quiz.next_question()
print("you have completed the most difficult quiz of the chinita")
print(f"your score is {quiz.score}/{quiz.question_number}")
