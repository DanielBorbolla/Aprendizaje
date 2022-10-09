import datetime
import json
import os

files = os.listdir()
directory = []
for file in files:
    st = os.stat(file)
    date = datetime.datetime.fromtimestamp(st.st_ctime)
    size = st.st_size
    dictionary = {
        "size": size,
        "name": file,
        "creation_date": date.strftime("%c"),
    }

    directory.append(dictionary)

print(type(st))
my_json = json.dumps(directory, indent=4)
print(my_json)
