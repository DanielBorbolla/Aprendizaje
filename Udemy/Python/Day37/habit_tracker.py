from datetime import date, timedelta
import requests
pixela_endpoint = "https://pixe.la/v1/users"
# token = "Y)Ap$#24waJF2pFA"
username = "danielborbolla"
user_params = {

    "token": token,
    "username": username,
    "agreeTermsOfService": "yes",
    "notMinor": "yes",
}

graph_endpoint = f"{pixela_endpoint}/{username}/graphs"
graph_config = {
    "id": "grafica1",
    "name": "grafica_de_estudio",
    "unit": "hours",
    "type": "int",
    "color": "shibafu"



}
headers = {
    "X-USER-TOKEN": token,
}
today = date.today()
yesterday = today-timedelta(1)
today = today.strftime("ds")
yesterday = yesterday.strftime("%Y%m%d")

my_graph_endpoint = f"{graph_endpoint}/{graph_config['id']}"
pixel_config = {
    "date": today,
    "quantity": "5",

}
modify_pixel = {
    "quantity": "8"
}
# response = requests.put(
#     url=f"{my_graph_endpoint}/{today}", json=modify_pixel, headers=headers)
response = requests.post(
    url=my_graph_endpoint, json=pixel_config, headers=headers)
# response = requests.post(url=pixela_endpoint, json=user_params)
print(response.text)
