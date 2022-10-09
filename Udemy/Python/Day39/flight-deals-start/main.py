# This file will need to use the DataManager,FlightSearch, FlightData, NotificationManager classes to achieve the program requirements.
from datetime import datetime, timedelta
import re
from data_manager import DataManager
import requests
from pprint import pprint

sheet_data = DataManager().data()
print(sheet_data[0]["prices"][2])
