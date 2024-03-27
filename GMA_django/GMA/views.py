from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .gma_models.Usuario import Usuario
from .gma_models.Jogador import Jogador
from .gma_models.Mesa import Mesa
from .gma_models.Post import Post
from django.http import JsonResponse

from django.core.paginator import Paginator
from .gma_serializers import CriarUsuarioSerializer, PostSerializer, CriarUsuarioSerializer, MesaSerializer



@api_view(["GET"])
def get_posts(request):
    page = request.query_params.get("page", 1)
    posts = Post.objects.all()
    paginator = Paginator(posts, per_page=5)
    posts_page = paginator.get_page(page)
    serializer = PostSerializer(posts_page, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def get_user_data(request):
    user = request.user  # Get the authenticated user
    User = Usuario
    user_data = {
        'id': user.id,
        'username': user.username,
        'email': user.email,
        # Include other user data as needed
    }
    return JsonResponse(user_data)

@api_view(["GET"])
def get_user_profile(request):
    user = request.user
    serializer = CriarUsuarioSerializer(user)
    return Response(serializer.data)

@api_view(["GET"])
def get_mesas(request):
    user_id = request.user.id
    page = request.query_params.get("page", 1)
    mesas = Mesa.objects.filter(jogadores__id=user_id)
    paginator = Paginator(mesas, per_page=5)
    mesas_page = paginator.get_page(page)
    serializer = MesaSerializer(mesas_page, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_mesa(request):
    mesa_serializer = MesaSerializer(data=request.data)
    #mestre = Usuario.objects.get(id=request.data['mestre'])
    #mesa_serializer['mestre'] = mestre
    if mesa_serializer.is_valid():
        mesa_serializer.save()
    return Response(mesa_serializer.data)

@api_view(['POST'])
def sign_up(request):
    serializer = CriarUsuarioSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

"""
@api_view(['GET'])
def getData(request):
    #user = Usuario.objects.get(id=1)
    user = Usuario.objects.latest('id')
    serializer = UsuarioSerializer(user)
    return Response(serializer.data)

@api_view(['POST'])
def signUp(request):
    serializer = UsuarioSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def add_jogador_to_mesa(request, mesa_id):
    if request.method == 'POST':
    jogador_nick = request.data.get('jogador_nick')  # Obtém o nick do jogador a ser adicionado
    mesa = get_object_or_404(Mesa, id=mesa_id)  # Obtém a mesa com base no ID fornecido

    jogador = Jogador.objects.get(nick=jogador_nick)  # Obtém o objeto jogador pelo nick

    # Adiciona o jogador à lista de jogadores da mesa
    mesa.jogadores.add(jogador)
        
    return Response({'message': f'Jogador {jogador_nick} adicionado à mesa {mesa_id}.'})
    
    return Response({'message': 'Método não permitido.'}, status=405)
"""

