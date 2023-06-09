from django.urls import path
from .views import cadastrar, verificar_duplicidade, login_view, alterar_senha

app_name = 'accounts'

urlpatterns = [
    path('cadastro/', cadastrar, name='cadastrar'),
    path('verificar-duplicidade/', verificar_duplicidade, name='verificar_duplicidade'),
    path('login/', login_view, name='login'),
    path('alterar-senha/', alterar_senha, name='alterar_senha'),
]
