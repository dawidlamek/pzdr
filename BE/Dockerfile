# Use Node.js as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the application port
EXPOSE 8080

# Run the application
CMD ["npm", "start"]
