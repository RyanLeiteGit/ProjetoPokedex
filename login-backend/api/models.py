from django.db import models
from django.contrib.auth.models import User

class PokemonTeam(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='team')
    pokemon_name = models.CharField(max_length=100)
    pokemon_id = models.IntegerField()
    
    
    def __str__(self):
        return f"{self.user.username} - {self.pokemon_name}"