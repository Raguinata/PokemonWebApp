from django.urls import path
from .views import cadastrar, verificar_duplicidade

app_name = 'accounts'

urlpatterns = [
    path('cadastro/', cadastrar, name='cadastrar'),
    path('verificar-duplicidade/', verificar_duplicidade, name='verificar_duplicidade'),
]
