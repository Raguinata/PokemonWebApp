from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import AccountSerializer
from .models import Account
from django.contrib.auth import login, authenticate


@api_view(['GET'])
def verificar_duplicidade(request):
    email = request.GET.get('email')
    username = request.GET.get('username')

    duplicate_email = Account.objects.filter(email__iexact=email).exists()
    duplicate_username = Account.objects.filter(username__iexact=username).exists()

    data = {
        'exists': duplicate_email or duplicate_username,
        'duplicateEmail': duplicate_email,
        'duplicateUsername': duplicate_username
    }

    return Response(data)

@api_view(['POST'])
def cadastrar(request):
    serializer = AccountSerializer(data=request.data)
    if serializer.is_valid():
        account = serializer.save()
        return Response({'account_id': account.id, 'message': 'Usuário cadastrado com sucesso!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

