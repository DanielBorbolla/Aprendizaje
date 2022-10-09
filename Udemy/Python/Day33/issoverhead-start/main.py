import requests
from datetime import datetime
import smtplib
import time

my_email = "danielborbolla88@gmail.com"
password =

MY_LAT = 20.425187  # Your latitude
MY_LONG = -100.371209  # Your longitude


def is_iss_overhead():
    response = requests.get(url="http://api.open-notify.org/iss-now.json")
    response.raise_for_status()
    data = response.json()

    iss_latitude = float(data["iss_position"]["latitude"])
    iss_longitude = float(data["iss_position"]["longitude"])

    # Your position is within +5 or -5 degrees of the ISS position.
    # print(iss_latitude, iss_longitude)
    if MY_LAT-5 <= iss_latitude <= MY_LAT+5 and MY_LONG-5 <= iss_longitude <= MY_LONG+5:
        return True
    else:
        return False


def utc_to_local(hour):
    offset = -5
    new_time = hour + offset
    if new_time < 0:
        new_time += 24
    return new_time


def is_night():

    parameters = {
        "lat": MY_LAT,
        "lng": MY_LONG,
        "formatted": 0,
    }

    response = requests.get(
        "https://api.sunrise-sunset.org/json", params=parameters)
    response.raise_for_status()
    data = response.json()
    sunrise = int(data["results"]["sunrise"].split("T")[1].split(":")[0])
    sunset = int(data["results"]["sunset"].split("T")[1].split(":")[0])
    time_now = datetime.now()
    hour = time_now.hour
    sunrise = utc_to_local(int(sunrise))
    sunset = utc_to_local(int(sunset))
    print(sunrise, sunset, hour)
    if int(hour) >= sunset or int(hour) <= sunrise:
        return True
    else:
        return False


if is_iss_overhead() and is_night():
    with smtplib.SMTP("smtp.gmail.com") as connection:
        connection.starttls()
        connection.login(user=my_email, password=password)
        connection.sendmail(from_addr=my_email,
                            to_addrs=my_email, msg="Subject:Look up \n\n ira está pasando la estacion internacional")
print(is_iss_overhead(), is_night())
# If the ISS is close to my current position
# and it is currently dark
# Then send me an email to tell me to look up.
# BONUS: run the code every 60 seconds.
