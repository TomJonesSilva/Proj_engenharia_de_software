from rest_framework import serializers
from .models import Usuario

from .gma_models.Usuario import Usuario
from .gma_models.Post import Post
from .gma_models.Mesa import Mesa

"""
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'
"""

class CriarUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        #password = serializers.CharField(max_length=128, required=False)
        fields = ('id', 'email', 'nick', 'avatar')

class PostSerializer(serializers.ModelSerializer):
    usuario = serializers.CharField(source="usuario.nick")
    image = serializers.CharField(source="usuario.image")
    
    class Meta:
        model = Post
        fields = ['id', 'usuario', 'image', 'hora_pub', 'conteudo', 'mesa']

class MesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mesa
        fields = ['id', 'image', 'mestre', 'title', 'data', 'description']