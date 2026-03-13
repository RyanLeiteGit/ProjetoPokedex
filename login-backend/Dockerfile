FROM python:3.10-slim

WORKDIR /app

# Copia e instala as dependências
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia todo o código do backend
COPY . .

# Copia o script de inicialização e dá permissão de execução
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 8000

# Executa o script ao iniciar o container
ENTRYPOINT ["/entrypoint.sh"]
