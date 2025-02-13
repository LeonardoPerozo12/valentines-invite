# Use Node.js as the first stage (Build Stage)
FROM node:18-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# **Ensure that the build script runs successfully**
RUN npm run build

# 2️⃣ Use Nginx as the second stage (Final Image)
FROM nginx:alpine

# Copy the built React files from the first stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to serve the app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
