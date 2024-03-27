from django.db import models
from .Usuario import Usuario
import uuid


class Ficha(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        blank=False,
        editable=False
    )
    usuario = models.ForeignKey(
        Usuario, 
        on_delete=models.CASCADE 
        #se usuario for deletado, ficha vai junto
    )
    nome = models.CharField(
        max_length=70,
        default='',
        blank=False
    )
    descricao = models.TextField(
        max_length = 300,
        default='',
        blank=True
    )
    habilidades = models.TextField(
        max_length = 100,
        default='',
        blank=True
    )
    bag = models.TextField(
        default='',
        blank=True
    )
    data = models.DateField(
        auto_now_add=True
        #pode ser interessante mostrar quando foi criada
    )
    def __str__(self) -> str:
        return self.nome + " (" + self.usuario.nick + ")"

    class Meta: #nao tenho certeza se isso é necessário
        constraints = [
            models.UniqueConstraint(
                fields=['usuario','nome'], name='combinacao_unica_usuario_fichanome'
            )
        ]