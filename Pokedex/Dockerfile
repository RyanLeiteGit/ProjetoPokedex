FROM node:22-alpine

WORKDIR /app

# Copia os arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o resto do código
COPY . .

EXPOSE 5173

# Roda o Vite expondo para a rede do Docker
CMD ["npm", "run", "dev", "--", "--host"]
