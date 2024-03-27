from django.db import models
from .Usuario import Usuario
import uuid

class MesaManager(models.Manager):
    def create_mesa(self, image, mestre, title, data, description):
    
        mesa = self.model(image=image, mestre=Usuario.objects.get(mestre), 
                          title=title, data=data, description=description)
        
        mesa.save()

        return mesa


class Mesa(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        blank=False,
        editable=False,
    )
    image = models.CharField(
        max_length=1000,
        editable=True,
        default=''
    )
    mestre = models.ForeignKey(
        Usuario, 
        on_delete=models.CASCADE,
        related_name="mestre_mesa"
    )
    title = models.CharField(
        max_length=50,
        default=''
    )
    data = models.CharField(
        max_length=10,
        default='11/09/2023'
    )
    description = models.TextField(
        max_length = 300,
        default='',
        blank=True
    )
    
    jogadores = models.ManyToManyField(
        Usuario,
        related_name="participantes_mesa",
        blank=True
    )

    objects = MesaManager()

    class Meta: 
        constraints = [
            models.UniqueConstraint( #para o mestre nao criar mais de uma mesa com o mesmo nome
                fields=['mestre', 'title'], name='combinacao_unica_mestre_e_titulo_mesa'
            )
        ]
    def __str__(self) -> str:
        return self.titulo + " (Mestre: " + self.mestre.nick + ")"