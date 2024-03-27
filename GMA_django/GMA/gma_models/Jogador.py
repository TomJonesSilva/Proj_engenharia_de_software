from django.db import models
import uuid

class Jogador(models.Model):
    nick = models.CharField(
        max_length=30, 
        primary_key=True,
        blank=False, 
        unique=True)

    fichas = models.CharField(
        max_length=30, 
        blank=False,
        null=True
        )

    mesas = models.ForeignKey(
        'Mesa', 
        on_delete=models.SET_NULL, 
        null=True, 
        blank=False)

    resumo = models.CharField(
        max_length=300,
        blank=False,
        null=True)

    habilidades = models.CharField(
        max_length=100,
        blank=False,
        null=True)

    usuario = models.OneToOneField(
        'Usuario', 
        on_delete=models.CASCADE,
        blank=False,
        unique=True)
