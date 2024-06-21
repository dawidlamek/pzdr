FROM node:14

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

# Add wait-for-it.sh
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

EXPOSE 8080

CMD ["./wait-for-it.sh", "db:3306", "--", "node", "src/app.js"]
