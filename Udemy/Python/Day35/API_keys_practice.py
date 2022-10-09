
from twilio.rest import Client
import requests
# account_sid = 'AC5540a076ca55d1b9f86e09e3caeb51d1'
# auth_token = '8bfe34871841012925996c3e9b9690f2'

parameters = {
    # "appid": "1ba9bdd0517378f708635f96b1391cd1",
    "lat": 20.588793,
    "lon": -100.389885,
    "units": "metric",
    "exclude": "current,minutely,daily,alerts"

}

response = requests.get(
    f"https://api.openweathermap.org/data/2.5/onecall", params=parameters)
response.raise_for_status()
weather = response.json()
forecast = []
umbrella = False
#! método tradicional
# for i in range(0, 12):
#     state = weather["hourly"][i]["weather"][0]["id"]
#     if state < 700:
#         umbrella = True
#     forecast.append(state)

# ? usando el slice de python
weather_slice = weather["hourly"][:12]
forecast = [hour_slice["weather"][0]["id"] for hour_slice in weather_slice]
for condition in forecast:
    if condition < 700:
        umbrella = True
if umbrella:
    client = Client(account_sid, auth_token)
    message = client.messages.create(
        body="It's going to rain today. Bring an  ☔️!",
        from_='+17473003187',
        to='+5214421451544'
    )
print(forecast)
