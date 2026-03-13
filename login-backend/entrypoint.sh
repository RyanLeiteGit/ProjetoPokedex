#!/bin/bash

echo "Aplicando migrações no banco de dados..."
python manage.py migrate

echo "Criando o usuário padrão ($APP_USER)..."
# O '|| true' no final evita que o Docker trave caso o usuário já exista ao reiniciar
export DJANGO_SUPERUSER_PASSWORD=$APP_PASSWORD
python manage.py createsuperuser --noinput --username "$APP_USER" --email "alvoro@pokedex.com" || true

echo "Iniciando o servidor Django..."
exec python manage.py runserver 0.0.0.0:8000
