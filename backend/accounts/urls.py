from django.urls import path
from .views import cadastrar

app_name = 'accounts'

urlpatterns = [
    path('cadastro/', cadastrar, name='cadastrar'),
]