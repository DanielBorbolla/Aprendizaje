class Animal:
    def __init__(self):
        self.num_eyes = 2

    def breathe(self):
        print("inhale \nexhale")


class Fish(Animal):
    def __init__(self):
        super().__init__()

    def swim(self):
        print("moving un water")

    def breathe(self):
        super().breathe()
        print("under water")


nemo = Fish()

nemo.swim()
nemo.breathe()
