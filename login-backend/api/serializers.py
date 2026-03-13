from rest_framework import serializers
from django.contrib.auth.models import User
from .models import PokemonTeam

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class PokemonTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = PokemonTeam
        fields = ['id', 'pokemon_name', 'pokemon_id']