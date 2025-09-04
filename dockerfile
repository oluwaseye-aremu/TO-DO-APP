# Stage 1: Build the frontend
FROM node:18 AS frontend-build
WORKDIR /app/frontend

# Install frontend dependencies and build
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Stage 2: Build the backend
FROM node:18 AS backend
WORKDIR /app

# Install backend dependencies
COPY backend/package*.json ./
RUN npm install

# Copy backend source code
COPY backend/ .

# Copy frontend build into backend's /frontend folder
COPY --from=frontend-build /app/frontend/build ./frontend

# Expose backend port
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
