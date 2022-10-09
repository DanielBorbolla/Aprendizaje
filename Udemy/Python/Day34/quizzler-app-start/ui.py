from tkinter import *
from quiz_brain import QuizBrain
THEME_COLOR = "#375362"
FONT = ("Arial", 30, "italic")


class QuizInterface:

    def __init__(self, quiz_brain: QuizBrain):
        self.quiz = quiz_brain
        self.window = Tk()
        self.window.title("Quizzler")
        self.window.config(padx=20, pady=20, background=THEME_COLOR)
        self.canvas = Canvas(width=300, height=250)
        self.score_label = Label(text="Score: 0", padx=20, pady=20,
                                 bg=THEME_COLOR, fg="white")
        self.score_label.grid(row=0, column=1)
        self.canvas.grid(row=1, column=0, columnspan=2, pady=50)
        self.question = self.canvas.create_text(
            150, 125, width=280, text="The Questions go here", font=FONT, fill=THEME_COLOR)
        cross_image = PhotoImage(file="quizzler-app-start/images/false.png")
        check_image = PhotoImage(file="quizzler-app-start/images/true.png")
        self.false_button = Button(
            image=cross_image, highlightthickness=0, command=self.false_answer)
        self.false_button.grid(row=2, column=1)
        self.true_button = Button(
            image=check_image, highlightthickness=0, command=self.true_answer)
        self.true_button.grid(row=2, column=0)
        self.get_next_question()
        self.window.mainloop()

    def get_next_question(self):
        self.canvas.config(background="white")
        self.score_label.config(text=f"Score: {self.quiz.score}")
        if self.quiz.still_has_questions():
            q_text = self.quiz.next_question()
            self.canvas.itemconfig(self.question, text=q_text)
        else:
            self.canvas.itemconfig(
                self.question, text=f"You finnished the quiz\n your final score is: {self.quiz.score}/10")
            self.true_button.config(state="disabled")
            self.false_button.config(state="disabled")

    def true_answer(self):
        answer = "True"
        self.feedback(self.quiz.check_answer(answer))

    def false_answer(self):
        answer = "False"
        self.feedback(self.quiz.check_answer(answer))

    def feedback(self, is_right):
        if is_right:
            self.canvas.config(background="green")
        else:
            self.canvas.config(background="red")
        self.window.after(1000, self.get_next_question)
