# Pokedex & Mais

Este é um projeto full-stack que consiste em uma aplicação de Pokédex com sistema de login e gerenciamento de time de Pokémons.

## Tecnologias Utilizadas

### Backend
- Python
- Django
- Django Rest Framework
- Django CORS Headers
- SQLite (Banco de dados padrão)

### Frontend
- React
- Vite
- React Router Dom
- Context API

## Pré-requisitos

Para executar este projeto, você precisa ter instalado em sua máquina:
- Python (versão 3.8 ou superior)
- Node.js (versão 18 ou superior)
- npm (geralmente vem junto com o Node.js)

## Instalação e Execução

Siga os passos abaixo para configurar e rodar a aplicação. Recomenda-se abrir dois terminais: um para o Backend e outro para o Frontend.

### Passo 1: Configuração do Backend (Django)

1. Abra o terminal e navegue até a pasta do backend:
   cd backend

2. Crie um ambiente virtual para isolar as dependências do projeto:
   
   No Windows:
   python -m venv venv

   No Linux/Mac:
   python3 -m venv venv

3. Ative o ambiente virtual:

   No Windows:
   .\venv\Scripts\activate

   No Linux/Mac:
   source venv/bin/activate

4. Instale as bibliotecas necessárias (Django, DRF e CORS Headers):
   pip install django djangorestframework django-cors-headers

5. Para instalar todas de uma vez na mesma versão, execute:
   pip install -m requirements.txt

6. Realize as migrações para criar o banco de dados:
   python manage.py migrate

7. Crie um superusuário para conseguir fazer login na aplicação:
   python manage.py createsuperuser

   (O terminal pedirá um nome de usuário, e-mail e senha. Preencha conforme solicitado).

8. Inicie o servidor do backend:
   python manage.py runserver

   O servidor estará rodando em: http://localhost:8000

---

### Passo 2: Configuração do Frontend (React)

1. Abra um novo terminal e navegue até a pasta do frontend:
   cd Pokedex

2. Instale todas as dependências do projeto listadas no package.json:
   npm install

3. Inicie o servidor de desenvolvimento:
   npm run dev

   O frontend estará rodando geralmente em: http://localhost:5173

## Documentação da API

O frontend se comunica com o backend através dos seguintes endpoints:

### Autenticação
- URL: /login
- Método: POST
- Descrição: Recebe nome de usuário e senha para autenticar.
- Corpo da Requisição (JSON):
  {
    "username": "seu_usuario",
    "password": "sua_senha"
  }

### Gerenciamento de Time
- URL: /api/team/
- Método: GET
- Descrição: Retorna a lista de Pokémons salvos no time do usuário logado.

- URL: /api/team/
- Método: POST
- Descrição: Adiciona um novo Pokémon ao time do usuário.
- Corpo da Requisição (JSON):
  {
    "pokemon_name": "pikachu",
    "pokemon_id": 25
  }

## Estrutura de Pastas

- backend/: Contém todo o código fonte da API Django.
- Pokedex/: Contém todo o código fonte da interface React.

