FROM node:20-slim

RUN apt-get update -y \
 && apt-get install -y openssl mariadb-client \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app


# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the app code
COPY . .

# Generate Prisma client (local binary)
RUN npx prisma generate

# Expose API port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]