from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer, PokemonTeamSerializer
from .models import PokemonTeam


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)

    if user is not None:
        
        serializer = UserSerializer(user)
        return Response({
            "message": "Login realizado com sucesso",
            "user": serializer.data  
        }, status=status.HTTP_200_OK)
    else:
        return Response({"error": "Credenciais inválidas"}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated]) 
def team_view(request):
    user = request.user

    if request.method == 'GET':
        team = PokemonTeam.objects.filter(user=user)
        serializer = PokemonTeamSerializer(team, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        # Adicionar pokemon ao time
        serializer = PokemonTeamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)