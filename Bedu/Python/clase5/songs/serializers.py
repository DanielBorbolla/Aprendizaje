from rest_framework import serializers


class ArtistSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
