from django.db import models
from .Usuario import Usuario
from .Mesa import Mesa
import uuid

class Post(models.Model):

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        blank=False,
        editable=False
    )

    usuario = models.ForeignKey(
        Usuario, 
        on_delete=models.CASCADE 
        #se usuario for deletado, post vai junto
    )

    hora_pub = models.DateTimeField(
        auto_now_add=True
    )

    conteudo = models.TextField(
        max_length=100
    )

    mesa = models.ForeignKey(
        Mesa,
        on_delete=models.CASCADE
    )

    class Meta:
        ordering = ["-hora_pub"]
        #ordena por data de publicação, decrescente
        #se quiser crescente, basta remover o - da string