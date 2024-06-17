# Użyj obrazu bazowego Node.js
FROM node:14

# Ustaw katalog roboczy
WORKDIR /app

# Kopiuj package.json i zainstaluj zależności
COPY package.json ./
RUN npm install

# Kopiuj resztę aplikacji
COPY . .

# Buduj aplikację
RUN npm run build

# Użyj obrazu serwera Nginx
FROM nginx:alpine

# Kopiuj zbudowane pliki do katalogu Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Otwórz port 80
EXPOSE 80

# Uruchom serwer Nginx
CMD ["nginx", "-g", "daemon off;"]