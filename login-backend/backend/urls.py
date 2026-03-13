from django.contrib import admin
from django.urls import path
from api.views import login_view, team_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login', login_view,name='login'), # URL exata que o authService chama
    path('api/team/', team_view, name='team'),
]