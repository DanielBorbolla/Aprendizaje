from calendar import weekday
import datetime as dt
import smtplib
import random

my_email = "danielborbolla88@gmail.com"
password = "Yada2015"
now = dt.datetime.now()
weekday = now.weekday()
if weekday == 6:
    with open("Birthday Wisher (Day 32) start/quotes.txt") as quote_file:
        all_quotes = quote_file.readlines()
        quote = random.choice(all_quotes)
    print(quote)
    with smtplib.SMTP("smtp.gmail.com") as connection:
        connection.starttls()
        connection.login(user=my_email, password=password)
        connection.sendmail(from_addr=my_email,
                            to_addrs="danielborbollasuarez88@gmail.com", msg=f"Subject:Motivacion del dia\n\n{quote}")
