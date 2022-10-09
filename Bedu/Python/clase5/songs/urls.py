"""Songs app URL configuration"""

from django.urls import path

from . import views

app_name = "songs"
urlpatterns = [
    path("", views.list_artist_view, name="list_artist"),
]
