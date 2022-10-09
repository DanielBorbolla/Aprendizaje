import requests

response = requests.get(url="http://api.open-notify.org/iss-now.json")
# herramienta para levantar estatus de error en caso de petición fallida
response.raise_for_status()
# para acceder a la información
data = response.json()["iss_position"]
iss_position = (data["longitude"], data["latitude"])
print(iss_position)
