from first_class import User

# user1 = User()
# user1.id = "001"
# user1.username = "Daniel"
# así podemos agregar atributos a un objeto creado desde una clase. estos no necesitan estar iniciados previamente
# pero es mejor fijar los atributos desde la clase en ese caso la información se mete de la siguiente manera

user1 = User("001", "Daniel")
print(user1.id)
user2 = User("002", "Yare")
user3 = User("003", "Riley")
user4 = User("004", "Bimba")

user1.follow(user4)
user2.follow(user4)
user2.follow(user3)

print(user4.followers)
