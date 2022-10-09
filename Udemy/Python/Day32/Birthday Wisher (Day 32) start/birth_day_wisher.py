import datetime as dt
import smtplib
import random
import pandas

my_email = "danielborbolla88@gmail.com"
password = "Yada2015"
now = dt.datetime.now()
today = (now.month, now.day)

data = pandas.read_csv("birthdays.csv")

birthday_dict = {data_row["name"]: data_row for (
    index, data_row) in data.iterrows()}

for person in birthday_dict:
    bird_day = (birthday_dict[person]["month"], birthday_dict[person]["day"])
    if bird_day == today:
        file_path = f"letter_templates/letter_{random.randint(1,3)}.txt"
        with open(file_path) as birthday_letter:
            contents = birthday_letter.read()
            contents = contents.replace("[NAME]", person)
            contents = contents.replace("Angela", "Daniel")
        with smtplib.SMTP("smtp.gmail.com") as connection:
            connection.starttls()
            connection.login(user=my_email, password=password)
            connection.sendmail(from_addr=my_email,
                                to_addrs=birthday_dict[person]["email"], msg=f"Subject:Happy bird day\n\n{contents}")
