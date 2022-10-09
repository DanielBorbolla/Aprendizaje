from doctest import set_unittest_reportflags
import requests
import datetime as dt

latitude = 20.425187  # lat
longitude = -100.371209  # lng
now = dt.datetime.now()
hour = now.hour
print(now)
parameters = {
    "lat": latitude,
    "lng": longitude,
    "formatted": 0,
}
response = requests.get(
    url="https://api.sunrise-sunset.org/json", params=parameters)
#!manera de hacer request directos
# ? url = "api.sunrise_sunset.org/json?lat=20.425187&lng=-100.371209"
response.raise_for_status()
data = response.json()
sunrise = (((data["results"]["sunrise"].split("T"))
            [1].split("+"))[0]).split(":")[0]
sunset = (((data["results"]["sunset"].split("T"))
           [1].split("+"))[0]).split(":")[0]


if int(hour) >= int(sunset) or int(hour) <= int(sunrise):
    print(sunrise, sunset)
    print(hour)
