import smtplib
import datetime as dt

my_email = "danielborbolla88@gmail.com"
password = "Yada2015"
smtplib.SMTP("smtp.gmail.com", port=587)
with smtplib.SMTP("smtp.gmail.com") as connection:
    connection.starttls()
    connection.login(user=my_email, password=password)
    connection.sendmail(from_addr=my_email,
                        to_addrs="yarexmak@gmail.com", msg="Subject:Mensaje al amor de mi vida\n\nTe amo monchi. \n email enviado desde mi programita :)")

now = dt.datetime.now()
year = now.year
month = now.month

date_of_bird = dt.datetime(year=1988, month=7, day=16)
print(year, month)
