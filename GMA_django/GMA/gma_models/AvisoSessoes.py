from django.db import models
import uuid

class AvisoSessoes(models.Model):

    id_mesas = models.ForeignKey(
        'Mesa', 
        on_delete=models.CASCADE, 
        primary_key=True, 
        blank=False, 
        unique=True
        )

    horario = models.DateTimeField(
        null=False
        )

    nick_jogador = models.OneToOneField(
        'Jogador', 
        on_delete=models.CASCADE, 
        blank=False,
        unique=True
        )

    aviso = models.CharField(
        max_length=500
        )
