from email import header
from urllib import response
from credentials import Credentials
import requests
import json


class DataManager:
    def __init__(self):
        pass

    def data(self):

        shity_credentials = Credentials("shity")
        response = requests.get(url=shity_credentials.endpoint(),
                                headers=shity_credentials.header())
        Data = response.json()
        return Data, self
