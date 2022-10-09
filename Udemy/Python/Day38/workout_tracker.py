from datetime import datetime, timedelta
from sys import exc_info
import requests
import math
# APP_ID = "6ed011e4"
# API_KEY = "ac85855c457b19338e89df1d81763c85"
NUTRI_ENDPOINT = " https://trackapi.nutritionix.com/v2/natural/exercise"
GENDER = "male"
# SHITY_TOKEN = "ke!Ke39B$D#)0IDZ"
WEIGHT = 134
HEIGHT = 178
AGE = 34
QUERY = input("Write the exercises you did: ")
SHEETY_ENDPOINT = "https://api.sheety.co/e5025894a219e858af6d24beafa02111/myWorkout/hoja1"
NUTRI_PARAMETERS = {
    "query": QUERY,
    "gender": GENDER,
    "weight_kg": WEIGHT,
    "height_cm": HEIGHT,
    "age": AGE,
}

NUTRI_HEADERS = {
    "x-app-id": APP_ID,
    "x-app-key": API_KEY,
}
response = requests.post(
    url=NUTRI_ENDPOINT, json=NUTRI_PARAMETERS, headers=NUTRI_HEADERS)
result = response.json()
excercise = result["exercises"][0]["name"].title()
duration = result["exercises"][0]["duration_min"]
calories = result["exercises"][0]["nf_calories"]

today = datetime.today()
time = today.time()
time = time.strftime("%H:%M:%S")
today = today.strftime("%d/%m/%Y")
headers = {
    # "Authorization": "Bearer ke!Ke39B$D#)0IDZ"
}
sheet_workout = {
    "hoja1": {
        "date": today,
        "time": time,
        "exercise": excercise,
        "duration": duration,
        "calories": calories,
    }
}
print(sheet_workout)
shit_response = requests.post(
    url=SHEETY_ENDPOINT, json=sheet_workout, headers=headers)
print(shit_response.text)


# pi = 3.14159
# g = 9.81
# R = 224

# rpm = (math.sqrt(g/R)*30/pi)
# print(rpm)
