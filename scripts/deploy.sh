#!/usr/bin/env bash
echo "Starting Onni deployment..."

# 1. Build frontend
cd ../frontend
yarn build || { echo "Frontend build failed"; exit 1; }

# 2. Build backend
cd ../backend
yarn build || { echo "Backend build failed"; exit 1; }

# 3. Docker build and push (optional)
cd ..
docker build -f .docker/Dockerfile.frontend -t onni/frontend:latest .
docker build -f .docker/Dockerfile.backend -t onni/backend:latest .
docker push onni/frontend:latest
docker push onni/backend:latest

echo "Deployment scripts finished successfully!"
