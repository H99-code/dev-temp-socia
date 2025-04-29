# Backend-Dockerfile (z. B. backend/Dockerfile) Node.js Mongo db

FROM node:18

WORKDIR /app

# Nur package.json und lockfile zuerst kopieren für besseres Caching
COPY package*.json ./
RUN npm install

# Jetzt den restlichen Code kopieren
COPY . .

# Optional: für prod, wenn du es definierst
# RUN npm run build

EXPOSE 4000
CMD ["node", "app.js"]
