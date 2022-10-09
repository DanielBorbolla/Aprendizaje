from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Artist
from .serializers import ArtistSerializer


@api_view(['GET', ])
def list_artist_view(request):
    queryset = Artist.objects.all()
    serializer = ArtistSerializer(instance=queryset, many=True)
    return Response(serializer.data)
# Create your views here.
