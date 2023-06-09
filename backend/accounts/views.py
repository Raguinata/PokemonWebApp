
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import AccountSerializer
from .models import Account

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

@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    try:
        account = Account.objects.get(username=username)
    except Account.DoesNotExist:
        return Response({'success': False, 'message': 'Username ou Senha incorretos.'})

    if account.password == password:
        # Realizar login
        request.session['account_id'] = account.id
        return Response({'success': True})
    else:
        return Response({'success': False, 'message': 'Username ou Senha incorretos.'})
    
@api_view(['POST'])
def alterar_senha(request):
    email = request.data.get('email')
    password = request.data.get('password')
    password2 = request.data.get('password2')

    try:
        account = Account.objects.get(email=email)
    except Account.DoesNotExist:
        return Response({'message': 'Esse email não consta no sistema.'}, status=status.HTTP_404_NOT_FOUND)

    if password != password2:
        return Response({'message': 'As senhas não condizem.'}, status=status.HTTP_400_BAD_REQUEST)

    account.password = password
    account.save()

    return Response({'message': 'Senha atualizada com sucesso.'}, status=status.HTTP_200_OK)