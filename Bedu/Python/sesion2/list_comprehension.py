numbers = [1, 2, 3, 4, 5, 6]

# new_list = []
# for n in numbers:
#     add_1 = n+1
#     new_list.append(add_1)
#! manera alternativa

# new_list = [new_item for item in list]
new_list = [number+1 for number in numbers]
print(new_list)
l1 = range(1, 50)
l2 = [num*2 for num in l1 if num % 2 == 0]
print(l2)
names = ["Alex", "Beth", "Caroline", "Dave", "Eleanor", "Freddie"]
big_names = [name.upper() for name in names if len(name) > 4]
print(big_names)
