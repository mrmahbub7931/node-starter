# Use official Node.js 18 image
FROM node:20-slim AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]

