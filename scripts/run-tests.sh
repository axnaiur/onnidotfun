#!/usr/bin/env bash
echo "Running all tests..."

# Backend unit tests
cd ../backend
yarn test || { echo "Backend tests failed"; exit 1; }

# Microservices tests
cd ../microservices/notification-service
yarn test || { echo "Notification service tests failed"; exit 1; }

cd ../analytics-service
yarn test || { echo "Analytics service tests failed"; exit 1; }

# E2E tests
cd ../../..
cd tests/e2e
yarn test || { echo "E2E tests failed"; exit 1; }

echo "All tests passed successfully."
exit 0
