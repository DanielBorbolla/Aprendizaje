import json


class Credentials:
    def __init__(self, api):
        self.api = api.upper()

    def token(self):
        try:
            with open("credentials.json", "r") as json_data:
                data = json.load(json_data)
        except FileNotFoundError:
            print("Error File Not Found")
        else:
            try:
                info = data[self.api]
            except KeyError:
                print("credentials not found")
            else:
                return info["TOKEN"]

    def endpoint(self):
        try:
            with open("credentials.json", "r") as json_data:
                data = json.load(json_data)
        except FileNotFoundError:
            print("Error File Not Found")
        else:
            try:
                info = data[self.api]
            except KeyError:
                print("endpoint not found")
            else:
                return info["ENDPOINT"]

    def header(self):
        try:
            with open("credentials.json", "r") as json_data:
                data = json.load(json_data)
        except FileNotFoundError:
            print("Error File Not Found")
        else:
            try:
                info = data[self.api]
            except KeyError:
                print("endpoint not found")
            else:
                return info["HEADER"]


# def retrieve_credentials(api):
#     API = api.upper()
#     try:
#         with open("credentials.json", "r") as json_data:
#             data = json.load(json_data)
#     except FileNotFoundError:
#         print("Error File Not Found")
#     else:
#         try:
#             info = data[API]
#         except KeyError:
#             print("credentials not found")
#         else:
#             credentials = dict()
#             credentials["token"] = info["TOKEN"]
#             credentials["endpoint"] = info["ENDPOINT"]
#             return credentials


# class Rectangle:
#     def __self__(self, Height, Width):
#         self.height = Height
#         self.width = Width

#     def area(self):
#         return self.width*self.height

#     def perimeter(self):
#         return 2*(self.width+self.height)
