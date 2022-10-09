class User:
    def __init__(self, user_id, usarname):
        self.id = user_id
        self.username = usarname
        self.followers = 0
        self.following = 0

    def follow(self, user):
        user.followers += 1
        self.following += 1
