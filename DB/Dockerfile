# Użyj obrazu bazowego MySQL
FROM mysql:5.7

# Skopiuj plik inicjalizacyjny do katalogu Docker
COPY init.sql /docker-entrypoint-initdb.d/

# Ustaw zmienne środowiskowe
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=car_service
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

# Otwórz port 3306
EXPOSE 3306