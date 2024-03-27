from django.db import models
import uuid

class Bag(models.Model):

    nick_jogador = models.OneToOneField(
        'Jogador', 
        on_delete=models.CASCADE, 
        primary_key=True,
        blank=False, 
        unique=True)

    id_mesa = models.ForeignKey(
        'Mesa', 
        on_delete=models.CASCADE,
        unique=True,
        blank=False)

    bag = models.CharField(max_length=500)
